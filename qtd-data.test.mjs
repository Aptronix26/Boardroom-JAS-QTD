import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync(new URL("./index.html", import.meta.url), "utf8");
const dataMatch = html.match(/const DATA=(.*?);\s*const SUM=/s);
const sumMatch = html.match(/const SUM=(.*?);\s*const ANSWERS=/s);
assert.ok(dataMatch, "DATA payload must exist");
assert.ok(sumMatch, "SUM payload must exist");

const data = vm.runInNewContext(`(${dataMatch[1]})`);
const sum = vm.runInNewContext(`(${sumMatch[1]})`);

assert.equal(data.length, 69);
assert.equal(new Set(data.map((row) => row.store)).size, 69);
assert.equal(new Set(data.map((row) => row.arm)).size, 15);
assert.equal(data.some((row) => row.store === "Aptronix FRM Coimbatore"), false);

const total = (field) => data.reduce((acc, row) => acc + Number(row[field] || 0), 0);
assert.equal(total("iPhone_cur"), 32401);
assert.equal(total("Mac_cur"), 8077);
assert.equal(total("iPad_cur"), 5110);
assert.equal(total("Watch_cur"), 2803);
assert.equal(total("AirPods_cur"), 5876);
assert.equal(total("ff_cur"), 1817210);
assert.equal(total("license_units"), 22236);
assert.equal(Math.round(total("apple_acc") * 100) / 100, 129117552);
assert.equal(Math.round(total("third_acc") * 100) / 100, 129048057.8);

assert.equal(sum.iPhone.cur, 32401);
assert.equal(sum.Mac.cur, 8077);
assert.equal(sum.iPad.cur, 5110);
assert.equal(sum.Watch.cur, 2803);
assert.equal(sum.AirPods.cur, 5876);
assert.equal(sum.Footfall.cur, 1817210);
assert.ok(Math.abs(sum["iPhone Trade-in"].cur - 5731 / 32401) < 1e-12);
assert.ok(Math.abs(sum["iPhone Loan"].cur - 0.24409740440109873) < 1e-12);
assert.ok(Math.abs(sum["Overall Loan"].cur - 0.1808097001861168) < 1e-12);

const logix = data.find((row) => row.store === "Aptronix Logix");
assert.ok(logix);
assert.ok(Math.abs(logix.iph_trade - 199 / 800) < 1e-12);
assert.match(html, /LOGTI\/2627\/3821/);
assert.match(html, /quantity 46,000/);
assert.match(html, /Till Wk12/);
assert.doesNotMatch(html, /source file\.xlsx|Wk8|Wk9/);

console.log("QTD Wk12 data model validated: 69 stores, 15 ARMs");
