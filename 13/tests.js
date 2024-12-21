const test = require("node:test");
const assert = require("node:assert").strict;
const { describe } = test;

function runTests(romanToInt) {
  describe("testing romanToInt", () => {
    test("I", () => { assert.equal(romanToInt("I"), 1) });
    test("II", () => { assert.equal(romanToInt("II"), 2); });
    test("III", () => { assert.equal(romanToInt("III"), 3); });
    test("IV", () => { assert.equal(romanToInt("IV"), 4); });
    test("V", () => { assert.equal(romanToInt("V"), 5); });
    test("VI", () => { assert.equal(romanToInt("VI"), 6); });
    test("VII", () => { assert.equal(romanToInt("VII"), 7); });
    test("VIII", () => { assert.equal(romanToInt("VIII"), 8); });
    test("IX", () => { assert.equal(romanToInt("IX"), 9); });
    test("X", () => { assert.equal(romanToInt("X"), 10); });
    test("MDCCCXCVIII", () => { assert.equal(romanToInt("MDCCCXCVIII"), 1898); });
  });
}

module.exports = {
  runTests,
};







