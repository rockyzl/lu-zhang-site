import { kitDevelopmentOof } from "./kit-development-oof.js";

const MODE = Object.freeze({ all: "all", calendar: "calendar", cyclic: "cyclic", profile: "profile" });
const MAX_CHECKUP = 28;
const HORIZON = kitDevelopmentOof.metadata.horizon;
const byId = (id) => document.getElementById(id);
const format = (value, digits = 2) => Number(value).toFixed(digits);
const IS_ZH = document.documentElement.lang.toLowerCase().startsWith("zh");
const tr = (zh, en) => IS_ZH ? zh : en;

const MODE_LABELS = Object.freeze({
  all: tr("全部老化方式", "All aging modes"),
  calendar: tr("Calendar · 静置老化", "Calendar aging"),
  cyclic: tr("Cyclic · 反复充放电", "Cyclic aging"),
  profile: tr("Driving profile · 驾驶工况", "Driving-profile aging"),
});
const FAMILY_LABELS = Object.freeze({ hgb: "HGB", elasticNet: "ElasticNet" });
const INTERPRETATION_LABELS = Object.freeze({
  improvement_signal: [tr("改善信号", "Improvement signal"), "improves"],
  worsening_signal: [tr("变差信号", "Worsening signal"), "worsens"],
  no_clear_change: [tr("没有明确变化", "No clear change"), "unclear"],
  no_clear_change_point_better: [tr("点估计较好，但区间不确定", "Better point estimate, uncertain interval"), "unclear"],
  no_clear_change_point_worse: [tr("点估计较差，但区间不确定", "Worse point estimate, uncertain interval"), "unclear"],
  mixed_rmse_unclear_mae_worse: [tr("结果混合：MAE 变差，RMSE 不确定", "Mixed: MAE worsens, RMSE uncertain"), "mixed"],
});
const STATUS_LABELS = Object.freeze({
  eligible_f1_and_d_core: tr("可配对预测：B、D_CORE 和 H3 目标齐全", "Paired forecast available: B, D_CORE, and H3 target are complete"),
  insufficient_history: tr("历史不足：至少需要前两次检查", "Insufficient history: at least two prior check-ups are required"),
  no_h3_followup: tr("没有未来第 3 次检查", "No third future check-up"),
  no_record: tr("这个检查点没有记录", "No record at this check-up"),
});

const elements = Object.freeze({
  tabs: [...document.querySelectorAll("[role=tab][data-mode]")],
  play: byId("replay-play"),
  previous: byId("replay-prev"),
  next: byId("replay-next"),
  slider: byId("replay-slider"),
  speed: byId("replay-speed"),
  checkupOutput: byId("checkup-output"),
  position: byId("replay-position"),
  overviewRoster: byId("overview-roster"),
  overviewCoverage: byId("overview-coverage"),
  overviewTime: byId("overview-time"),
  overviewExposure: byId("overview-exposure"),
  overviewReviewCell: byId("overview-review-cell"),
  overviewReviewReason: byId("overview-review-reason"),
  scorecards: byId("mode-scorecards"),
  comparisonGrid: byId("eis-comparison-grid"),
  modelFamily: byId("model-family"),
  fleetGrid: byId("fleet-grid"),
  fleetPanel: byId("fleet-panel"),
  fleetCount: byId("fleet-count"),
  queueSummary: byId("queue-summary"),
  reviewQueue: byId("review-queue"),
  cellIdentity: byId("cell-identity"),
  currentCapacity: byId("current-capacity"),
  q0Capacity: byId("q0-capacity"),
  currentSoh: byId("current-soh"),
  bForecast: byId("b-forecast"),
  bNote: byId("b-note"),
  dCoreForecast: byId("d-core-forecast"),
  dCoreNote: byId("d-core-note"),
  bViewLabel: byId("b-view-label"),
  dCoreLabel: byId("d-core-label"),
  predictionExplanation: byId("prediction-explanation"),
  viewStatus: byId("view-status"),
  technicalCell: byId("technical-cell"),
  technicalArtifact: byId("technical-artifact"),
  historyLine: byId("history-line"),
  historyPoints: byId("history-points"),
  forecastPoints: byId("forecast-points"),
  bForecastLine: byId("b-forecast-line"),
  dCoreForecastLine: byId("d-core-forecast-line"),
  chartGrid: byId("chart-grid"),
  chartLabels: byId("chart-labels"),
  maturation: byId("maturation-state"),
  statuses: byId("cell-statuses"),
});

const state = {
  mode: MODE.all,
  checkup: 10,
  selectedCellId: kitDevelopmentOof.cells[0].id,
  timer: null,
  reviewIds: new Set(),
  family: "hgb",
};

function snapshotAt(cell, checkup) {
  return cell.snapshots.find((snapshot) => snapshot.i === checkup) ?? null;
}

function historyThrough(cell, checkup) {
  return cell.snapshots.filter((snapshot) => snapshot.i <= checkup);
}

function visibleCells() {
  return state.mode === MODE.all
    ? kitDevelopmentOof.cells
    : kitDevelopmentOof.cells.filter((cell) => cell.mode === state.mode);
}

function predictionPair(snapshot) {
  const primary = snapshot?.pred?.primary;
  const b = primary?.B?.[state.family];
  const dCore = primary?.D_CORE?.[state.family];
  if (!b || !dCore) return null;
  return {
    b,
    dCore,
    disagreement: Math.abs(b.loss - dCore.loss),
  };
}

function metricRecord(mode, view, family, policy = "primary") {
  return kitDevelopmentOof.metrics.find((row) =>
    row.mode === mode && row.view === view && row.familyKey === family && row.policy === policy
  );
}

function deltaRecord(mode, family, policy = "primary") {
  return kitDevelopmentOof.pairedDeltas.find((row) =>
    row.mode === mode && row.familyKey === family && row.policy === policy
  );
}

function exposureText(snapshot, cell) {
  if (!snapshot) return tr("这个检查点没有记录", "No record at this check-up");
  const days = `${format(snapshot.d, 0)} ${tr("天", "days")}`;
  if (snapshot.x === null) return days;
  if (cell.mode === MODE.calendar) return `${days} · throughput ${format(snapshot.x, 1)} Q₀`;
  if (cell.mode === MODE.cyclic) return `${days} · ${tr("累计 throughput", "cumulative throughput")} ${format(snapshot.x, 1)} Q₀`;
  return `${days} · ${tr("累计 throughput", "cumulative throughput")} ${format(snapshot.x, 1)} Q₀ · ${tr("km 不在本 artifact 中", "mileage is not present in this artifact")}`;
}

function renderScorecards() {
  elements.scorecards.replaceChildren(
    ...[MODE.calendar, MODE.cyclic, MODE.profile].map((mode) => {
      const delta = deltaRecord(mode, state.family);
      const [label, kind] = INTERPRETATION_LABELS[delta.interpretation];
      const card = document.createElement("article");
      card.dataset.interpretation = kind;
      card.innerHTML = `
        <span>${MODE_LABELS[mode]}</span>
        <strong>${label}</strong>
        <div><b>${FAMILY_LABELS[state.family]}</b> · ΔMAE ${format(delta.maeDelta, 3)} pp</div>
        <div>95% CI [${format(delta.maeCi95[0], 3)}, ${format(delta.maeCi95[1], 3)}]</div>
        <small>${tr("D_CORE − B；负数表示误差下降。不是模型选择。", "D_CORE − B; negative means lower error. This is not model selection.")}</small>
      `;
      return card;
    }),
  );
}

function renderComparisonGrid() {
  elements.comparisonGrid.replaceChildren(
    ...[MODE.calendar, MODE.cyclic, MODE.profile].flatMap((mode) =>
      ["elasticNet", "hgb"].map((family) => {
        const b = metricRecord(mode, "B", family);
        const dCore = metricRecord(mode, "D_CORE", family);
        const delta = deltaRecord(mode, family);
        const [label, kind] = INTERPRETATION_LABELS[delta.interpretation];
        const card = document.createElement("article");
        card.className = "comparison-card";
        card.dataset.interpretation = kind;
        card.innerHTML = `
          <div class="comparison-heading"><span>${MODE_LABELS[mode]}</span><b>${FAMILY_LABELS[family]}</b></div>
          <strong>${label}</strong>
          <dl>
            <dt>B</dt><dd>MAE ${format(b.mae, 3)} · RMSE ${format(b.rmse, 3)} · R² ${format(b.r2, 3)}</dd>
            <dt>D_CORE</dt><dd>MAE ${format(dCore.mae, 3)} · RMSE ${format(dCore.rmse, 3)} · R² ${format(dCore.r2, 3)}</dd>
            <dt>ΔMAE</dt><dd>${format(delta.maeDelta, 3)} pp · 95% CI [${format(delta.maeCi95[0], 3)}, ${format(delta.maeCi95[1], 3)}]</dd>
            <dt>ΔRMSE</dt><dd>${format(delta.rmseDelta, 3)} pp · 95% CI [${format(delta.rmseCi95[0], 3)}, ${format(delta.rmseCi95[1], 3)}]</dd>
          </dl>
          <small>Development OOF · D_CORE − B · 2,000 whole-condition bootstrap draws</small>
        `;
        return card;
      }),
    ),
  );
}

function setCheckup(nextCheckup) {
  state.checkup = Math.max(0, Math.min(MAX_CHECKUP, Number(nextCheckup)));
  elements.slider.value = String(state.checkup);
  elements.checkupOutput.value = String(state.checkup);
  render();
}

function pause() {
  if (state.timer !== null) window.clearInterval(state.timer);
  state.timer = null;
  elements.play.setAttribute("aria-pressed", "false");
  elements.play.textContent = tr("▶ 播放", "▶ Play");
  elements.play.setAttribute("aria-label", tr("播放历史回放", "Play historical replay"));
}

function play() {
  if (state.timer !== null) {
    pause();
    return;
  }
  if (state.checkup >= MAX_CHECKUP) state.checkup = 0;
  elements.play.setAttribute("aria-pressed", "true");
  elements.play.textContent = tr("❚❚ 暂停", "❚❚ Pause");
  elements.play.setAttribute("aria-label", tr("暂停历史回放", "Pause historical replay"));
  state.timer = window.setInterval(() => {
    if (state.checkup >= MAX_CHECKUP) {
      pause();
      return;
    }
    setCheckup(state.checkup + 1);
  }, Number(elements.speed.value));
}

function selectMode(mode) {
  state.mode = mode;
  elements.tabs.forEach((tab) => {
    const selected = tab.dataset.mode === mode;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  const selectedTab = elements.tabs.find((tab) => tab.dataset.mode === mode);
  elements.fleetPanel.setAttribute("aria-labelledby", selectedTab.id);
  const cells = visibleCells();
  if (!cells.some((cell) => cell.id === state.selectedCellId)) state.selectedCellId = cells[0].id;
  render();
}

function buildReviewQueue(cells) {
  const paired = cells
    .map((cell) => ({ cell, snapshot: snapshotAt(cell, state.checkup) }))
    .map((item) => ({ ...item, pair: predictionPair(item.snapshot) }))
    .filter((item) => item.pair !== null)
    .sort((left, right) => right.pair.disagreement - left.pair.disagreement);
  const availability = cells
    .map((cell) => ({ cell, snapshot: snapshotAt(cell, state.checkup) }))
    .filter((item) => item.snapshot === null || item.snapshot.status !== "eligible_f1_and_d_core");
  const queue = [
    ...paired.slice(0, 8).map((item) => ({
      ...item,
      reason: tr(`加入 EIS 前后相差 ${format(item.pair.disagreement, 2)} pp`, `${format(item.pair.disagreement, 2)} pp difference after adding EIS`),
      kind: tr("B / D_CORE 分歧", "B / D_CORE disagreement"),
    })),
    ...availability.slice(0, 4).map((item) => ({
      ...item,
      reason: STATUS_LABELS[item.snapshot?.status ?? "no_record"],
      kind: tr("数据可用性", "Data availability"),
    })),
  ];
  state.reviewIds = new Set(queue.slice(0, 8).map((item) => item.cell.id));
  return { queue, eligible: paired.length, unavailable: availability.length };
}

function renderOverview(cells, queueResult, selected) {
  const exact = snapshotAt(selected, state.checkup);
  elements.overviewRoster.textContent = String(kitDevelopmentOof.metadata.rosterCount);
  elements.overviewCoverage.textContent = tr(
    `${kitDevelopmentOof.metadata.cellsWithPrediction} 个曾有可用预测；${kitDevelopmentOof.metadata.cellsWithoutPrediction} 个全程不满足预测条件`,
    `${kitDevelopmentOof.metadata.cellsWithPrediction} cells have at least one forecast; ${kitDevelopmentOof.metadata.cellsWithoutPrediction} never meet the current forecast conditions`,
  );
  elements.overviewTime.textContent = tr(`检查 ${state.checkup} / ${MAX_CHECKUP}`, `Check-up ${state.checkup} / ${MAX_CHECKUP}`);
  elements.overviewExposure.textContent = exact
    ? `${selected.id}：${exposureText(exact, selected)}`
    : tr(`${selected.id}：这个检查点没有记录`, `${selected.id}: no record at this check-up`);
  const first = queueResult.queue[0];
  elements.overviewReviewCell.textContent = first?.cell.id ?? tr("没有可比较预测", "No comparable forecast");
  elements.overviewReviewReason.textContent = first
    ? tr(`${first.kind}：${first.reason}；只用于研究复核`, `${first.kind}: ${first.reason}; research review only`)
    : tr("当前没有同时包含两种预测的记录", "No record currently contains both forecasts");
  elements.position.textContent = tr(
    `${MODE_LABELS[state.mode]} · 检查 ${state.checkup} · ${cells.length} 个电芯`,
    `${MODE_LABELS[state.mode]} · check-up ${state.checkup} · ${cells.length} cells`,
  );
}

function renderFleet(cells) {
  elements.fleetGrid.replaceChildren(
    ...cells.map((cell) => {
      const snapshot = snapshotAt(cell, state.checkup);
      const status = snapshot?.status ?? "no_record";
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = `cell-tile${cell.id === state.selectedCellId ? " selected" : ""}${state.reviewIds.has(cell.id) ? " example-attention" : ""}`;
      tile.dataset.cellId = cell.id;
      tile.dataset.status = status.replaceAll("_", "-");
      tile.setAttribute("aria-label", `${cell.id}; ${STATUS_LABELS[status]}${state.reviewIds.has(cell.id) ? tr("; 建议研究复核", "; research review suggested") : ""}`);
      tile.innerHTML = `<b>P${String(cell.condition).padStart(3, "0")} · R${cell.replicate}</b><small>${cell.mode.slice(0, 3)} · ${snapshot ? `${format(snapshot.s, 1)}%` : tr("无记录", "no record")}</small>`;
      tile.addEventListener("click", () => {
        state.selectedCellId = cell.id;
        render();
        byId("detail-title").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return tile;
    }),
  );
  elements.fleetGrid.dataset.rosterSize = String(kitDevelopmentOof.metadata.rosterCount);
  elements.fleetCount.textContent = tr(
    `${cells.length} / ${kitDevelopmentOof.metadata.rosterCount} 个电芯显示`,
    `${cells.length} / ${kitDevelopmentOof.metadata.rosterCount} cells shown`,
  );
}

function renderQueue(result) {
  elements.queueSummary.innerHTML = `
    <div><strong>${result.eligible}</strong><span>${tr("两种预测都可比较", "both forecasts comparable")}</span></div>
    <div><strong>${result.unavailable}</strong><span>${tr("需要解释数据状态", "data status needs explanation")}</span></div>
  `;
  if (result.queue.length === 0) {
    elements.reviewQueue.innerHTML = `<li>${tr("当前没有可复核记录。", "No records are available for review.")}</li>`;
    return;
  }
  elements.reviewQueue.replaceChildren(
    ...result.queue.map((entry) => {
      const item = document.createElement("li");
      item.innerHTML = `<button type="button">${entry.cell.id}</button><br><small><b>${entry.kind}</b> · ${entry.reason}</small>`;
      item.querySelector("button").addEventListener("click", () => {
        state.selectedCellId = entry.cell.id;
        render();
        byId("detail-title").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return item;
    }),
  );
}

function chartCoordinates(history, snapshot) {
  const pair = predictionPair(snapshot);
  const forecasts = pair ? [pair.b.future, pair.dCore.future] : [];
  const values = [...history.map((point) => point.s), ...forecasts.filter((value) => value !== undefined)];
  const minValue = Math.min(...values, 100) - 1;
  const maxValue = Math.max(...values, 100) + 1;
  const width = 620;
  const height = 250;
  const padX = 42;
  const padY = 24;
  const maxX = Math.max(MAX_CHECKUP, state.checkup + HORIZON);
  return {
    x: (checkup) => padX + (checkup / maxX) * (width - padX * 2),
    y: (soh) => padY + ((maxValue - soh) / (maxValue - minValue)) * (height - padY * 2),
    minValue,
    maxValue,
    width,
    height,
    padX,
    padY,
  };
}

function renderChart(history, snapshot) {
  const c = chartCoordinates(history, snapshot);
  const gridValues = [c.maxValue, (c.maxValue + c.minValue) / 2, c.minValue];
  elements.chartGrid.innerHTML = gridValues.map((value) => {
    const yy = c.y(value);
    return `<line class="chart-grid-line" x1="${c.padX}" y1="${yy}" x2="${c.width - c.padX}" y2="${yy}"></line>`;
  }).join("");
  elements.chartLabels.innerHTML = gridValues.map((value) =>
    `<text class="chart-axis-label" x="3" y="${c.y(value) + 4}">${format(value, 0)}%</text>`,
  ).join("");
  elements.historyLine.setAttribute("points", history.map((point) => `${c.x(point.i)},${c.y(point.s)}`).join(" "));
  elements.historyPoints.innerHTML = history.map((point) =>
    `<circle class="chart-point" cx="${c.x(point.i)}" cy="${c.y(point.s)}" r="4"><title>${tr("检查", "Check-up")} ${point.i}: SoH ${format(point.s, 2)}%</title></circle>`,
  ).join("");

  const pair = predictionPair(snapshot);
  const hideLine = (line) => line.setAttribute("visibility", "hidden");
  if (!pair) {
    hideLine(elements.bForecastLine);
    hideLine(elements.dCoreForecastLine);
    elements.forecastPoints.replaceChildren();
    return;
  }
  const futureIndex = snapshot.i + HORIZON;
  const setForecast = (line, prediction) => {
    line.setAttribute("x1", c.x(snapshot.i));
    line.setAttribute("y1", c.y(snapshot.s));
    line.setAttribute("x2", c.x(futureIndex));
    line.setAttribute("y2", c.y(prediction.future));
    line.setAttribute("visibility", "visible");
  };
  setForecast(elements.bForecastLine, pair.b);
  setForecast(elements.dCoreForecastLine, pair.dCore);
  elements.forecastPoints.innerHTML = `
    <circle class="forecast-point b-point" cx="${c.x(futureIndex)}" cy="${c.y(pair.b.future)}" r="6"><title>${tr("B 预计未来 SoH", "B forecast future SoH")} ${format(pair.b.future, 2)}%</title></circle>
    <circle class="forecast-point d-core-point" cx="${c.x(futureIndex)}" cy="${c.y(pair.dCore.future)}" r="6"><title>${tr("D_CORE 预计未来 SoH", "D_CORE forecast future SoH")} ${format(pair.dCore.future, 2)}%</title></circle>
  `;
}

function renderForecast(snapshot) {
  const pair = predictionPair(snapshot);
  if (!pair) {
    elements.bForecast.textContent = tr("不可用", "Unavailable");
    elements.dCoreForecast.textContent = tr("不可用", "Unavailable");
    elements.bNote.textContent = STATUS_LABELS[snapshot?.status ?? "no_record"];
    elements.dCoreNote.textContent = STATUS_LABELS[snapshot?.status ?? "no_record"];
    return;
  }
  elements.bViewLabel.textContent = tr(`B · ${FAMILY_LABELS[state.family]}：预计损失 / 未来 SoH`, `B · ${FAMILY_LABELS[state.family]}: forecast loss / future SoH`);
  elements.dCoreLabel.textContent = tr(`D_CORE · ${FAMILY_LABELS[state.family]}：预计损失 / 未来 SoH`, `D_CORE · ${FAMILY_LABELS[state.family]}: forecast loss / future SoH`);
  elements.bForecast.textContent = `${format(pair.b.loss)} pp / ${format(pair.b.future)}%`;
  elements.bNote.textContent = `outer fold ${pair.b.fold} · capacity history + context`;
  elements.dCoreForecast.textContent = `${format(pair.dCore.loss)} pp / ${format(pair.dCore.future)}%`;
  elements.dCoreNote.textContent = `outer fold ${pair.dCore.fold} · B + current-check-up EIS`;
}

function renderMaturation(cell) {
  const originIndex = state.checkup - HORIZON;
  const origin = originIndex >= 0 ? snapshotAt(cell, originIndex) : null;
  const current = snapshotAt(cell, state.checkup);
  const pair = predictionPair(origin);
  if (!origin || !current || !pair || origin.h3s === null) {
    elements.maturation.dataset.h3Maturity = "locked";
    elements.maturation.className = "maturity-locked";
    elements.maturation.innerHTML = state.checkup < HORIZON
      ? tr(`<strong>还不能核对</strong><br>至少要前进到检查 ${HORIZON}。`, `<strong>Not ready to verify</strong><br>Advance to at least check-up ${HORIZON}.`)
      : tr("<strong>这一刻没有可成熟的预测</strong><br>可能是历史不足，或该电芯在这里没有记录。", "<strong>No forecast matures at this moment</strong><br>History may be insufficient, or this cell has no record here.");
    return;
  }
  const bError = Math.abs(pair.b.future - current.s);
  const dCoreError = Math.abs(pair.dCore.future - current.s);
  elements.maturation.dataset.h3Maturity = "matured";
  elements.maturation.className = "maturity-open";
  elements.maturation.innerHTML = tr(
    `<strong>检查 ${originIndex} 的预测，现在有答案了</strong><br>真实 SoH：${format(current.s)}%<br>B 绝对误差：${format(bError)} pp · D_CORE：${format(dCoreError)} pp`,
    `<strong>The forecast from check-up ${originIndex} now has a measured answer</strong><br>Measured SoH: ${format(current.s)}%<br>B absolute error: ${format(bError)} pp · D_CORE: ${format(dCoreError)} pp`,
  );
}

function renderDetail(cell) {
  const snapshot = snapshotAt(cell, state.checkup);
  const history = historyThrough(cell, state.checkup);
  const latest = history.at(-1) ?? null;
  elements.cellIdentity.textContent = `Condition ${cell.condition} · replicate ${cell.replicate} · ${MODE_LABELS[cell.mode]} · ${exposureText(snapshot, cell)}`;
  elements.currentCapacity.textContent = snapshot ? `${format(snapshot.q, 3)} Ah` : tr("无记录", "No record");
  elements.q0Capacity.textContent = tr(`初始容量 Q₀ = ${format(cell.q0, 3)} Ah`, `Initial capacity Q₀ = ${format(cell.q0, 3)} Ah`);
  elements.currentSoh.textContent = snapshot ? `${format(snapshot.s)}%` : tr("无记录", "No record");
  renderForecast(snapshot);
  const delta = deltaRecord(cell.mode, state.family);
  const [deltaLabel] = INTERPRETATION_LABELS[delta.interpretation];
  elements.predictionExplanation.innerHTML = snapshot?.status === "eligible_f1_and_d_core"
    ? tr(
      `大白话：这里固定使用 <b>${FAMILY_LABELS[state.family]}</b>，比较不含 EIS 的 B 与加入 EIS 的 D_CORE。<b>${MODE_LABELS[cell.mode]}</b> 的整体配对开发结果是“${deltaLabel}”；这不是因果结论，也没有选定最终模型。`,
      `In plain language: keep <b>${FAMILY_LABELS[state.family]}</b> fixed, then compare B without EIS against D_CORE with EIS. The paired development result for <b>${MODE_LABELS[cell.mode]}</b> is “${deltaLabel}.” This is neither a causal conclusion nor a selected final model.`,
    )
    : tr(`这里不硬猜：${STATUS_LABELS[snapshot?.status ?? "no_record"]}。页面不会用零或虚构数字填空。`, `No forced guess: ${STATUS_LABELS[snapshot?.status ?? "no_record"]}. The page will not fill gaps with zero or invented values.`);
  elements.viewStatus.textContent = snapshot
    ? STATUS_LABELS[snapshot.status]
    : latest
      ? tr(`这个检查点没有新记录；最近一次真实记录是检查 ${latest.i}。`, `No new record at this check-up; the latest measured record is check-up ${latest.i}.`)
      : tr("当前还没有可见记录。", "No measured record is visible yet.");
  elements.statuses.replaceChildren();
  const badge = document.createElement("span");
  badge.className = "status-badge";
  badge.dataset.status = (snapshot?.status ?? "no_record").replaceAll("_", "-");
  badge.textContent = STATUS_LABELS[snapshot?.status ?? "no_record"];
  elements.statuses.append(badge);
  if (state.reviewIds.has(cell.id)) {
    const review = document.createElement("span");
    review.className = "status-badge review-badge";
    review.textContent = tr("建议研究复核：模型分歧靠前，不是故障报警", "Research review suggested: high model disagreement, not a fault alarm");
    elements.statuses.append(review);
  }
  const folds = predictionPair(snapshot);
  elements.technicalCell.textContent = folds
    ? `${cell.id} · ${FAMILY_LABELS[state.family]} · B/D_CORE outer fold ${folds.b.fold}`
    : tr(`${cell.id} · 当前无 OOF prediction row`, `${cell.id} · no OOF prediction row at this point`);
  elements.technicalArtifact.textContent = `${kitDevelopmentOof.metadata.sourceRunId} · OOF SHA-256 ${kitDevelopmentOof.metadata.sourceHashes.oofPredictions}`;
  renderChart(history, snapshot);
  renderMaturation(cell);
}

function render() {
  const cells = visibleCells();
  const selected = cells.find((cell) => cell.id === state.selectedCellId) ?? cells[0];
  state.selectedCellId = selected.id;
  const queueResult = buildReviewQueue(cells);
  renderOverview(cells, queueResult, selected);
  renderFleet(cells);
  renderQueue(queueResult);
  renderDetail(selected);
}

elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => selectMode(tab.dataset.mode));
  tab.addEventListener("keydown", (event) => {
    const current = elements.tabs.indexOf(tab);
    let target = null;
    if (event.key === "ArrowRight") target = elements.tabs[(current + 1) % elements.tabs.length];
    if (event.key === "ArrowLeft") target = elements.tabs[(current - 1 + elements.tabs.length) % elements.tabs.length];
    if (event.key === "Home") target = elements.tabs[0];
    if (event.key === "End") target = elements.tabs.at(-1);
    if (target === null) return;
    event.preventDefault();
    selectMode(target.dataset.mode);
    target.focus();
  });
});
elements.play.addEventListener("click", play);
elements.previous.addEventListener("click", () => { pause(); setCheckup(state.checkup - 1); });
elements.next.addEventListener("click", () => { pause(); setCheckup(state.checkup + 1); });
elements.slider.addEventListener("input", (event) => { pause(); setCheckup(event.target.value); });
elements.speed.addEventListener("change", () => { if (state.timer !== null) { pause(); play(); } });
elements.modelFamily.addEventListener("change", (event) => {
  state.family = event.target.value;
  renderScorecards();
  render();
});

renderScorecards();
renderComparisonGrid();
selectMode(MODE.all);
