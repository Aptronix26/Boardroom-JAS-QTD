globalThis.DASHBOARD_CONFIG = Object.freeze({
  id: "quarter-to-date",
  title: "Boardroom Intelligence — Quarter to Date",
  reporting: Object.freeze({
    label: "FY26–27 · Q4 JAS · Through Wk9",
    quarter: "JAS",
    currentPeriod: "Through Wk9",
    periodUnit: "quarter-to-date"
  }),
  governance: Object.freeze({
    source: "Validated QTD weekly master",
    dataThrough: "Wk9",
    published: "31 Aug 2026",
    expectedStores: 69,
    expectedArms: 15
  }),
  benchmarks: Object.freeze({ loanAttachPct: 25, tradeInPct: 20 }),
  dataClassification: "Internal business reporting"
});
