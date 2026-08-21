# Boardroom Intelligence — Quarter to Date

Standalone QTD dashboard covering executive performance, business exploration, product lines, demand, commercial levers, execution priorities, and leadership performance.

## Run and deploy

Open `index.html` locally, or publish the repository through **GitHub Settings → Pages → Deploy from a branch → main / root**.

## Validation

Run `npm test` with Node.js 18 or later.

## Data note

This repository contains a static reporting snapshot. Reconcile source totals and update the visible reporting-period labels whenever the embedded data is refreshed.

## Quality controls

- `dashboard-config.js` centralizes the quarter label and operating benchmarks.
- `retail-metrics.js` standardizes common calculations across the dashboard suite.
- `METRIC_DICTIONARY.md` records the approved KPI definitions.
- `npm test` validates the HTML and formula contracts.
