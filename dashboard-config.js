globalThis.DASHBOARD_CONFIG = Object.freeze({
  id: "quarter-to-date",
  title: "Boardroom Intelligence — Quarter to Date",
  reporting: Object.freeze({
    label: "FY26–27 · Q4 JAS · Through Wk7",
    quarter: "JAS",
    currentPeriod: "Through Wk7",
    periodUnit: "quarter-to-date"
  }),
  governance: Object.freeze({
    source: "JAS QTD weekly master source workbook",
    dataThrough: "Wk7",
    published: "22 Aug 2026",
    expectedStores: 69,
    expectedArms: 15
  }),
  benchmarks: Object.freeze({ loanAttachPct: 25, tradeInPct: 10 }),
  dataClassification: "Internal business reporting"
});
