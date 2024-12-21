const { runTests } = require("./tests.js");

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = String(x);
  const n = s.length;
  const till = Math.round((s.length - 10 * Number.EPSILON) / 2);
  for (let i = 0; i < till; i++) {
    if (s[i] !== s[n - (i+1)]) {
      return false;
    }
  }
  return true; 
};

runTests(isPalindrome);
