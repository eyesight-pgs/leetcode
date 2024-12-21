const test = require("node:test");
const assert = require("node:assert").strict;
const { describe } = test;

function runTests(isPalindrome) {
  describe("test isPalindrome", () => {
    test("even digits", () => {
      assert.equal(isPalindrome(1221), true);
    });
    test("odd digits", () => {
      assert.equal(isPalindrome(12321), true);
    });

    test("negative value", () => {
      assert.equal(isPalindrome(-12321), false);
    });

    test("not a palindrome", () => {
      assert.equal(isPalindrome(12321), true);
    });
  });
}

module.exports = {
  runTests,
}

