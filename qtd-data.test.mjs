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
assert.equal(total("iPhone_cur"), 25121);
assert.equal(total("Mac_cur"), 6478);
assert.equal(total("iPad_cur"), 4303);
assert.equal(total("Watch_cur"), 2230);
assert.equal(total("AirPods_cur"), 4392);
assert.equal(total("ff_cur"), 1328007);
assert.equal(total("license_units"), 17850);
assert.equal(Math.round(total("apple_acc") * 100) / 100, 99726436);
assert.equal(Math.round(total("third_acc") * 100) / 100, 105517119.83);

assert.equal(sum.iPhone.cur, 25121);
assert.equal(sum.Mac.cur, 6478);
assert.equal(sum.iPad.cur, 4303);
assert.equal(sum.Watch.cur, 2230);
assert.equal(sum.AirPods.cur, 4392);
assert.equal(sum.Footfall.cur, 1328007);
assert.ok(Math.abs(sum["iPhone Trade-in"].cur - 4712 / 25121) < 1e-12);

const logix = data.find((row) => row.store === "Aptronix Logix");
assert.ok(logix);
assert.ok(Math.abs(logix.iph_trade - 162 / 627) < 1e-12);
assert.match(html, /LOGTI\/2627\/3821/);
assert.match(html, /quantity 46,000/);
assert.match(html, /Till Wk9/);
assert.doesNotMatch(html, /source file\.xlsx|Wk8/);

console.log("QTD Wk9 data model validated: 69 stores, 15 ARMs");
