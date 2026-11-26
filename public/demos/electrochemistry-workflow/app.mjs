// SciencesLoop research workflow: real, bounded numerical tool execution.
// No LLM, fabricated metrics, model-fitted pulse parameters, or instrument I/O.
import {executeTool} from '../battery-research/agent-worker.mjs';

const $ = (id) => document.getElementById(id);
const zh = document.documentElement.lang.toLowerCase().startsWith('zh');
const t = (en, cn) => zh ? cn : en;
const form = $('wf-form');
const goalSelect = $('wf-goal');
const runButton = $('wf-run');
const list = $('wf-steps');
const status = $('wf-status');
const outcome = $('wf-outcome');
const exportButton = $('wf-export');
const plot = $('wf-plot');
const sourceUrl = 'https://zenodo.org/records/3633835';
let dataPromise;
let latestReport = null;
let running = false;

const fmt = (value, digits = 2) =>
  Number.isFinite(Number(value)) ? Number(value).toFixed(digits) : t('Not available', '不可用');
function setStatus(en, cn) { status.textContent = t(en, cn); }
function data() {
  if (!dataPromise) dataPromise = fetch(new URL('../battery-research/data.json', import.meta.url))
    .then((response) => { if (!response.ok) throw Error('Source data HTTP ' + response.status); return response.json(); })
    .then((json) => {
      if (!json?.source?.doi || !Array.isArray(json.spectra) || !Array.isArray(json.samples)) throw Error('Dataset schema is incomplete');
      return json;
    }).catch((error) => {dataPromise=null;throw error;});
  return dataPromise;
}
function metric(label, value) {
  const box = document.createElement('div');
  box.className = 'wf-metric';
  const big = document.createElement('strong');
  big.textContent = value;
  const small = document.createElement('span');
  small.textContent = label;
  box.append(big, small);
  $('wf-metrics').append(box);
}
function clearPlot() { plot.replaceChildren(); }
const ns = 'http://www.w3.org/2000/svg';
function svgElement(tag, attributes = {}, text) {
  const node = document.createElementNS(ns, tag);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, String(value));
  if (text !== undefined) node.textContent = String(text);
  plot.appendChild(node);
  return node;
}
function setupAxes(xLabel, yLabel) {
  clearPlot();
  for (let i=0;i<=4;i++) {
    const y=235-i*50;
    svgElement('line',{x1:62,x2:654,y1:y,y2:y,stroke:'#d9e1d5','stroke-width':1});
  }
  svgElement('line',{x1:62,y1:235,x2:654,y2:235,stroke:'#718278','stroke-width':1.5});
  svgElement('line',{x1:62,y1:30,x2:62,y2:235,stroke:'#718278','stroke-width':1.5});
  svgElement('text',{x:360,y:265,fill:'currentColor','text-anchor':'middle','font-size':13},xLabel);
  svgElement('text',{x:18,y:20,fill:'currentColor','font-size':12},yLabel);
}
function linePlot(lines, xLabel, yLabel) {
  setupAxes(xLabel, yLabel);
  const all=lines.flatMap(s=>s.values).filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]));
  if(!all.length)throw Error('No finite chart points');
  const minX=Math.min(...all.map(p=>p[0])),maxX=Math.max(...all.map(p=>p[0]));
  const minY=Math.min(...all.map(p=>p[1])),maxY=Math.max(...all.map(p=>p[1]));
  const dx=maxX-minX||1,dy=maxY-minY||1;
  const sx=x=>62+592*(x-minX)/dx,sy=y=>235-200*(y-minY)/dy;
  for(let i=0;i<=4;i++){
    svgElement('text',{x:62+i*148,y:250,'text-anchor':'middle','font-size':10,fill:'#65766b'},fmt(minX+i*dx/4,2));
    svgElement('text',{x:54,y:239-i*50,'text-anchor':'end','font-size':10,fill:'#65766b'},fmt(minY+i*dy/4,2));
  }
  lines.forEach((series,k)=>{
    const values=series.values.filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]));
    if(!values.length)return;
    const d=values.map((p,i)=>(i?'L':'M')+sx(p[0]).toFixed(1)+' '+sy(p[1]).toFixed(1)).join(' ');
    svgElement('path',{d,fill:'none',stroke:series.color,'stroke-width':2.3,'stroke-linejoin':'round','stroke-linecap':'round'});
    svgElement('rect',{x:80+k*220,y:8,width:12,height:9,fill:series.color});
    svgElement('text',{x:97+k*220,y:17,fill:'currentColor','font-size':12},series.name);
  });
}
function bars(rows, unit) {
  setupAxes(t('Methods', '方法'),unit);
  const max=Math.max(...rows.map(r=>r.value).filter(Number.isFinite),.001);
  const w=95, gap=60, start=90;
  rows.forEach((r,i)=>{
    const height=190*r.value/max,x=start+i*(w+gap);
    svgElement('rect',{x,y:235-height,width:w,height,fill:r.color,rx:3});
    svgElement('text',{x:x+w/2,y:Math.max(29,224-height),'text-anchor':'middle',fill:'currentColor','font-size':13},fmt(r.value,3));
    svgElement('text',{x:x+w/2,y:253,'text-anchor':'middle',fill:'currentColor','font-size':11},r.name);
  });
}
function appendStep(label, action, args) {
  const li=document.createElement('li');
  li.className='wf-running';
  const h=document.createElement('strong');
  h.textContent=label;
  const detail=document.createElement('span');
  detail.textContent=action+'('+JSON.stringify(args)+')';
  li.append(h,detail);
  list.append(li);
  li.scrollIntoView?.({block:'nearest',behavior:'smooth'});
  return {li,detail};
}
async function tool(report, label, action, args, providedData) {
  const {li,detail}=appendStep(label,action,args);
  const start=performance.now();
  await new Promise(resolve=>requestAnimationFrame(resolve));
  try {
    const output=await executeTool(action,args,providedData);
    const durationMs=Math.round(performance.now()-start);
    li.className='wf-complete';
    detail.textContent=action+'('+JSON.stringify(args)+') · '+durationMs+' ms · '+t('completed','完成');
    report.steps.push({action,parameters:args,durationMs,output});
    return output;
  } catch(error) {
    li.className='wf-error';
    detail.textContent=action+' · '+String(error.message||error);
    report.steps.push({action,parameters:args,error:String(error.message||error)});
    throw error;
  }
}
function setDecision(en,cn,limitEn,limitCn) {
  $('wf-decision').textContent=t(en,cn);
  $('wf-limits').textContent=t(limitEn,limitCn);
}
function provenance(report,json) {
  report.source={title:json.source.title,doi:json.source.doi,paper:json.source.paper,
    url:sourceUrl,license:json.source.license,chemistry:json.source.chemistry,
    alignment:json.source.alignment};
}
async function evaluateEis(report,json) {
  const cell=$('wf-cell').value;
  const late=Number($('wf-late').value);
  const spectra=json.spectra.filter(s=>s.cell===cell);
  const earlySpectrum=spectra.find(s=>s.cycle===1);
  const lateSpectrum=spectra.find(s=>s.cycle===late);
  if(!earlySpectrum||!lateSpectrum)throw Error('Selected spectra are unavailable');
  await tool(report,t('Inspect original measurement inventory','核对实测数据清单'),'inspect_data',{},json);
  const early=await tool(report,t('Fit the reference EIS spectrum','拟合起始 EIS 谱'),'fit_eis',{cell,cycle:1},json);
  const comparison=await tool(report,t('Compare three explanations on identical later points','在相同后期数据点上比较三种解释'),'compare_eis_hypotheses',{cell,reference_cycle:1,cycle:late},json);
  metric(t('Measured frequency points','实测频率点数'),String(earlySpectrum.real.length));
  const r0=comparison.candidates.find(s=>s.id==='r0_only');
  const full=comparison.candidates.find(s=>s.id==='all_parameters');
  metric(t('R0-only weighted RMS','仅调整 R0 的加权 RMS'),fmt(r0.weightedRmsPercent,2)+'%');
  metric(t('Full refit weighted RMS','全部参数重拟合的加权 RMS'),fmt(full.weightedRmsPercent,2)+'%');
  linePlot([
    {name:t('Early measured EIS','早期实测 EIS'),color:'#457b71',values:earlySpectrum.real.map((x,i)=>[x,earlySpectrum.negImag[i]])},
    {name:t('Later measured EIS','后期实测 EIS'),color:'#c07c3d',values:lateSpectrum.real.map((x,i)=>[x,lateSpectrum.negImag[i]])}
  ],'Re(Z) / Ω','−Im(Z) / Ω');
  $('wf-plot-caption').textContent=t(
    'Real measured Nyquist data. Diagnostic indices are not physical charge–discharge cycle numbers. The EIS models are simplified candidate circuits.',
    '真实测得的 Nyquist 曲线。诊断序号不是物理充放电循环圈数；EIS 拟合仅使用简化候选电路。');
  const ratio=r0.weightedRmsPercent/Math.max(full.weightedRmsPercent,1e-9);
  setDecision(
    'On these later-spectrum points, the R0-only model has '+fmt(ratio,2)+'× the error of the full refit. This is a descriptive comparison, not proof of a degradation mechanism. Next: verify temperature, SOC and rest conditions; examine residuals and alternative circuits before assigning physical causes.',
    '对于相同后期数据点，仅调整 R0 的残差是全部重拟合的 '+fmt(ratio,2)+' 倍。这只是描述性对比，不能据此认定衰减机理。下一步核对温度、SOC 与静置条件，并检查残差及其他候选电路。',
    comparison.limits,
    '同一数据集上的拟合对照不等于独立预测或统计显著性检验；更多参数可能降低残差，但不能证明唯一物理机理。'
  );
}
async function evaluateIntegrated(report,json) {
  // One executed sequence across real measured EIS, a held-out-cell ML model,
  // and a transparent illustrative simulation. The simulation is not fitted
  // from EIS and no joint mechanistic inference is claimed.
  await evaluateEis(report,json);
  const forecast=await tool(report,
    t('Check whether future-capacity ML beats simple baselines','检验容量预测机器学习是否优于简单基线'),
    'predict_capacity',{horizon:Number($('wf-horizon').value),domain:'25'},json);
  metric(t('Ridge held-out MAE','Ridge 留出电池 MAE'),fmt(forecast.modelMAE,3)+' mAh');
  metric(t('Persistence baseline MAE','延续基线 MAE'),fmt(forecast.persistenceMAE,3)+' mAh');
  const simulated=await tool(report,
    t('Run independent illustrative pulse model','运行独立的说明性脉冲模型'),
    'simulate_pulse',{ocv_v:4,current_a:Number($('wf-current').value),r0_ohm:.35,r1_ohm:.6,tau_s:10,duration_s:10});
  metric(t('Illustrative pulse IR drop','说明性脉冲 IR 压降'),fmt(simulated.instantaneousDropV*1000,2)+' mV');
  const mlBetter=forecast.modelMAE<forecast.persistenceMAE;
  const r0=report.steps.find(s=>s.action==='compare_eis_hypotheses')?.output?.candidates?.find(s=>s.id==='r0_only');
  const full=report.steps.find(s=>s.action==='compare_eis_hypotheses')?.output?.candidates?.find(s=>s.id==='all_parameters');
  const delta=r0&&full?fmt(r0.weightedRmsPercent/Math.max(full.weightedRmsPercent,1e-9),2):'—';
  setDecision(
    'Integrated review completed. On the same later EIS spectrum, the R0-only residual is '+delta+'× the full refit. Held-out-cell Ridge MAE is '+fmt(forecast.modelMAE,3)+' mAh versus persistence '+fmt(forecast.persistenceMAE,3)+' mAh ('+(mlBetter?'lower':'not lower')+'). An independent one-RC pulse scenario was also computed. Next: check SOC, temperature and rest context, inspect competing circuits, and acquire matched pulse measurements before trying to fit the pulse model or changing an experiment.',
    '整条工作流已运行。相同后期 EIS 数据上，仅调整 R0 的残差是全部拟合的 '+delta+' 倍；留出电池 Ridge MAE 为 '+fmt(forecast.modelMAE,3)+' mAh，延续基线为 '+fmt(forecast.persistenceMAE,3)+' mAh（'+(mlBetter?'较优':'未占优')+'）。同时执行了独立的一阶 RC 脉冲示例。下一步先核对 SOC、温度与静置条件，审阅候选电路，并取得条件匹配的实测脉冲曲线，再考虑拟合或调整实验。',
    'EIS fitting, held-out-cell ML prediction and illustrative pulse simulation are different evidence types—not a jointly calibrated cell model. No parameter transfer or unique physical mechanism is established. The simulation is not a PyBaMM run, and ML improvement is not externally validated.',
    'EIS 拟合、留出电池的机器学习预测和说明性脉冲仿真是不同类型证据，并非联合标定的电池模型。没有把 EIS 参数转给脉冲模型，也不能证明唯一物理机理；本例不是 PyBaMM，机器学习也未获独立外部验证。');
  $('wf-plot-caption').textContent += ' '+t(
    'The chart shows measured Nyquist data; additional ML and simulation outputs appear in the numerical cards and export.',
    '图中展示实测 Nyquist 数据；机器学习与仿真数值记录显示在指标卡和导出报告中。');
}

async function evaluateML(report,json) {
  const horizon=Number($('wf-horizon').value);
  await tool(report,t('Inspect records and pairing constraints','检查数据和配对限制'),'inspect_data',{},json);
  const result=await tool(report,t('Train and score held-out-cell ridge ML','按整颗电池划分的 Ridge 模型评估'),'predict_capacity',{horizon,domain:'25'},json);
  metric(t('Held-out cell count','独立测试电池数'),String(result.testCells.length));
  metric(t('Ridge MAE (mAh)','Ridge MAE (mAh)'),fmt(result.modelMAE,3));
  metric(t('Persistence MAE (mAh)','延续现有容量的 MAE (mAh)'),fmt(result.persistenceMAE,3));
  bars([{name:'Ridge',value:result.modelMAE,color:'#457b71'},
    {name:t('Persistence','延续基线'),value:result.persistenceMAE,color:'#c07c3d'},
    {name:t('Mean baseline','均值基线'),value:result.baselineMAE,color:'#8e9c90'}], 'MAE / mAh');
  $('wf-plot-caption').textContent=t('Lower MAE is better. The same public research dataset is used for exploratory model development and evaluation.','MAE 越低越好。使用同一个公开科研数据集开展探索性模型开发与评估。');
  const better=result.modelMAE<result.persistenceMAE;
  setDecision(
    better?'The ridge model beats persistence on this exploratory held-out-cell test, but further external cell and protocol validation is needed. Next: check test-condition transfer and calibration.':'The ridge model does not beat the simple persistence baseline for this configuration. Do not recommend deployment. Next: diagnose feature timing, test conditions and cross-cell generalization.',
    better?'Ridge 在这组按电池留出的探索性测试中优于延续基线，但仍需要独立电池和协议的外部验证。下一步检查跨工况迁移与校准。':'本次 Ridge 预测没有优于简单的延续基线，不应据此部署。下一步检查特征时序、测试条件及跨电池泛化。',
    result.limits.join(' '),
    '探索性公开数据演示；独立样本单位是电池而非每条谱。测试结果已展示，不是盲测或封闭的外部验证。'
  );
}
async function evaluatePulse(report) {
  const current_a=Number($('wf-current').value);
  const result=await tool(report,t('Run bounded Thevenin pulse simulation','执行有边界的 Thevenin 脉冲仿真'),'simulate_pulse',{
    ocv_v:4,current_a,r0_ohm:.35,r1_ohm:.6,tau_s:10,duration_s:10
  });
  metric(t('Instantaneous IR drop','瞬时 IR 压降'),fmt(result.instantaneousDropV*1000,2)+' mV');
  metric(t('Voltage at pulse end','脉冲结束电压'),fmt(result.endPulseVoltageV,5)+' V');
  metric(t('C1 = tau / R1','电容 C1 = τ / R1'),fmt(result.capacitanceF,2)+' F');
  linePlot([{name:t('Simulated terminal voltage','仿真端电压'),color:'#457b71',values:result.samples.map(s=>[s.time_s,s.voltage_v])}],t('Time / s','时间 / s'),t('Voltage / V','电压 / V'));
  $('wf-plot-caption').textContent=t('Calculated on demand using a one-RC Thevenin model; no measured-cell parameters were inferred.','由一阶 Thevenin 模型实时计算；没有从实测电池推断任何参数。');
  setDecision(
    'The model separates instantaneous R0 drop and exponential polarization/relaxation. Next: collect measured pulse/rest traces at matched SOC and temperature before fitting or validating any cell-specific parameters.',
    '模型区分 R0 带来的瞬时压降与指数极化/松弛。下一步需要采集 SOC 与温度匹配的实测脉冲/静置曲线，再拟合或验证具体电池参数。',
    result.limits,
    '这只是前向解析仿真：OCV 固定，不包含 SOC、温度、扩散或衰减动态；也不是 PyBaMM 仿真，不能用于证明实测电池机理。'
  );
}
function showGoal() {
  for(const fieldset of document.querySelectorAll('.wf-parameters'))fieldset.hidden=fieldset.dataset.goal!==goalSelect.value&&goalSelect.value!=='integrated';
  if(!running)setStatus('Ready to run. Tool steps change with the research goal.','准备就绪。工具步骤将根据研究目标变化。');
}
goalSelect.addEventListener('change',showGoal);
showGoal();
form.addEventListener('submit',async(event)=>{
  event.preventDefault();
  if(running)return;
  running=true;
  runButton.disabled=true;
  exportButton.disabled=true;
  outcome.hidden=true;
  list.replaceChildren();
  $('wf-metrics').replaceChildren();
  clearPlot();
  const goal=goalSelect.value;
  const report={schema:'sciencesloop-scientific-workflow-v1',generatedAt:new Date().toISOString(),workflow:goal,
    orchestration:'Deterministic, allowlisted, user-selected tool plan (not autonomous LLM)',steps:[],source:null};
  setStatus('Loading real data and running approved tools…','正在加载真实数据并运行已批准的工具……');
  try {
    if(goal==='pulse')await evaluatePulse(report);
    else {
      const json=await data();
      provenance(report,json);
      if(goal==='integrated')await evaluateIntegrated(report,json);
      else if(goal==='eis')await evaluateEis(report,json);
      else if(goal==='ml')await evaluateML(report,json);
      else throw Error('Unknown research goal');
    }
    latestReport={...report,conclusion:$('wf-decision').textContent,limitations:$('wf-limits').textContent};
    outcome.hidden=false;
    exportButton.disabled=false;
    setStatus('Completed. Outputs come from executed numerical tools; review the limitations below.','执行完成。结果来自真实运行的数值工具，请阅读下方局限性。');
  }catch(error){
    latestReport=null;
    setStatus('Workflow stopped: '+String(error.message||error),'流程中止：'+String(error.message||error));
    outcome.hidden=true;
  }finally{
    running=false;
    runButton.disabled=false;
  }
});
exportButton.addEventListener('click',()=>{
  if(!latestReport)return;
  const blob=new Blob([JSON.stringify(latestReport,null,2)],{type:'application/json'});
  const href=URL.createObjectURL(blob);
  const anchor=document.createElement('a');anchor.href=href;anchor.download='sciencesloop-'+latestReport.workflow+'-workflow-report.json';
  document.body.appendChild(anchor);anchor.click();anchor.remove();URL.revokeObjectURL(href);
});
