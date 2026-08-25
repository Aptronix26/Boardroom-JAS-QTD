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
assert.equal(total("iPhone_cur"), 23784);
assert.equal(total("Mac_cur"), 6084);
assert.equal(total("iPad_cur"), 4092);
assert.equal(total("Watch_cur"), 2049);
assert.equal(total("AirPods_cur"), 4018);
assert.equal(total("ff_cur"), 1186530);
assert.equal(total("license_units"), 17037);
assert.equal(Math.round(total("apple_acc") * 100) / 100, 93597908.5);
assert.equal(Math.round(total("third_acc") * 100) / 100, 99085332.19);

assert.equal(sum.iPhone.cur, 23784);
assert.equal(sum.Mac.cur, 6084);
assert.equal(sum.iPad.cur, 4092);
assert.equal(sum.Watch.cur, 2049);
assert.equal(sum.AirPods.cur, 4018);
assert.equal(sum.Footfall.cur, 1186530);
assert.ok(Math.abs(sum["iPhone Trade-in"].cur - 4520 / 23784) < 1e-12);

const logix = data.find((row) => row.store === "Aptronix Logix");
assert.ok(logix);
assert.ok(Math.abs(logix.iph_trade - 158 / 607) < 1e-12);
assert.match(html, /LOGTI\/2627\/3821/);
assert.match(html, /quantity 46,000/);
assert.match(html, /Till Wk8/);
assert.match(html, /source file\.xlsx/);
assert.doesNotMatch(html, /Wk7/);

console.log("QTD Wk8 data model validated: 69 stores, 15 ARMs");
