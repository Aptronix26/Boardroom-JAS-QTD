globalThis.DASHBOARD_CONFIG = Object.freeze({
  id: "quarter-to-date",
  title: "Boardroom Intelligence — Quarter to Date",
  reporting: Object.freeze({
    label: "FY26–27 · Q4 JAS · Through Wk8",
    quarter: "JAS",
    currentPeriod: "Through Wk8",
    periodUnit: "quarter-to-date"
  }),
  governance: Object.freeze({
    source: "source file.xlsx · QTD weekly master",
    dataThrough: "Wk8",
    published: "25 Aug 2026",
    expectedStores: 69,
    expectedArms: 15
  }),
  benchmarks: Object.freeze({ loanAttachPct: 25, tradeInPct: 10 }),
  dataClassification: "Internal business reporting"
});
