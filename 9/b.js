const { runTests } = require("./tests.js");

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let remaining = x;
  let reverse = 0;
  while (remaining > 0) {
    const bidi = remaining % 10;
    remaining = (remaining - bidi) / 10;
    reverse = reverse * 10 + bidi;
  }
  return reverse == x;
};


function main() {
  runTests(isPalindrome);
}
main();




