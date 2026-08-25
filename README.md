# Boardroom Intelligence — Quarter to Date

Standalone QTD dashboard covering executive performance, business exploration, product lines, demand, commercial levers, execution priorities, and leadership performance.

## Run and deploy

Open `index.html` locally, or publish the repository through **GitHub Settings → Pages → Deploy from a branch → main / root**.

## Validation

Run `npm test` with Node.js 18 or later.

## Data note

This repository contains a static reporting snapshot refreshed from `source file.xlsx` through Wk8 on 25 Aug 2026. The canonical model covers 69 stores and 15 ARMs.

The QTD exit comparison normalizes cumulative Wk8 performance to a 13-week quarter. The known transaction `LOGTI/2627/3821` (quantity 46,000) is quarantined from Aptronix Logix iPhone trade-in attachment. The loan-only Aptronix FRM Coimbatore row has zero activity and remains outside the canonical 69-store model.

## Quality controls

- `dashboard-config.js` centralizes the quarter label and operating benchmarks.
- `retail-metrics.js` standardizes common calculations across the dashboard suite.
- `METRIC_DICTIONARY.md` records the approved KPI definitions.
- `npm test` validates the HTML and formula contracts.
- `qtd-data.test.mjs` reconciles the embedded Wk8 dataset, headline totals, coverage, QA exclusions, and source metadata.
- The responsive executive UI layer improves hierarchy, navigation, KPI cards, analytical tables, and accessible focus behavior without changing QTD logic.
