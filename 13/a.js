const { runTests } = require("./tests.js");

function romanToInt(s) {
  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let total = 0;
  for (let i = s.length - 1; i > -1; i--) {
    const digit = s[i];
    const lookAhead = s[i-1];

    const currVal = map[digit];
    const nextVal = map[lookAhead];
    if (nextVal < currVal) {
      total += (currVal - nextVal);
      i--;
    } else {
      total += currVal;
    }
    // console.log(digit, currVal, nextVal, "=>", total);
  }
  return total;
}

runTests(romanToInt);
