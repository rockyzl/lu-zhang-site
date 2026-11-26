import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {executeTool} from '../public/demos/battery-research/agent-worker.mjs';

const data=JSON.parse(readFileSync('public/demos/battery-research/data.json','utf8'));
assert.equal(data.source.doi,'10.5281/zenodo.3633835');
assert(data.spectra.some(s=>s.cell==='25C05'&&s.cycle===1));
assert(data.spectra.some(s=>s.cell==='25C05'&&s.cycle===275));

const inventory=await executeTool('inspect_data',{},data);
assert(inventory.pairedRecords>1000);
const fitted=await executeTool('fit_eis',{cell:'25C05',cycle:1},data);
assert(Number.isFinite(fitted.weightedRmsPercent));
const compared=await executeTool('compare_eis_hypotheses',{cell:'25C05',reference_cycle:1,cycle:275},data);
assert.equal(compared.candidates.length,3);
for(const row of compared.candidates)assert(Number.isFinite(row.weightedRmsPercent));
assert(compared.candidates.some(x=>x.id==='r0_only'));
assert(compared.candidates.some(x=>x.id==='all_parameters'));

const ml=await executeTool('predict_capacity',{domain:'25',horizon:5},data);
for(const value of [ml.modelMAE,ml.persistenceMAE,ml.baselineMAE])assert(Number.isFinite(value));
assert(ml.trainCells.length>=3&&ml.testCells.length>0);
assert(ml.testCells.every(cell=>!ml.trainCells.includes(cell)));

const pulse=await executeTool('simulate_pulse',{ocv_v:4,current_a:.01,r0_ohm:.35,r1_ohm:.6,tau_s:10,duration_s:10});
assert.equal(pulse.samples.length,122);
assert(Math.abs(pulse.instantaneousDropV-.0035)<1e-9);
assert(pulse.limits.includes('not PyBaMM'));
await assert.rejects(()=>executeTool('unapproved_hardware_command',{},data),/Tool not permitted/);

const demo=readFileSync('src/components/ScientificWorkflowDemo.astro','utf8');
const js=readFileSync('public/demos/electrochemistry-workflow/app.mjs','utf8');
assert(demo.includes('id="wf-form"')&&demo.includes('id="wf-export"'));
assert(demo.includes('.wf-layout>*{min-width:0}'), 'grid child must shrink at mobile widths');
assert(demo.includes('@media(max-width:880px){.wf-layout{grid-template-columns:minmax(0,1fr)}'), 'mobile grid must not use min-content width');
assert(demo.includes('alternatePath={u(zh ? "/workflow/electrochemistry/" : "/zh/workflow/electrochemistry/")}'));
assert(js.includes("executeTool(action,args,providedData)"));
assert(js.includes('latestReport'));
assert(demo.includes('value="integrated"'));
assert(js.includes('async function evaluateIntegrated(report,json)'));
assert(js.includes("if(goal==='integrated')await evaluateIntegrated(report,json)"));
console.log('Scientific workflow acceptance: measured EIS, hypothesis tool, held-out-cell ML and bounded simulation passed.');