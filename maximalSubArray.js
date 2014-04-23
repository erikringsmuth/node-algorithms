'use strict';

module.exports = function maximalSubArray(array) {
  if (array.length <= 1) {
    return array;
  }
  var bestSum = array[0],
      bestStart = 0,
      bestEnd = 0,
      start = 0,
      currentSum = array[0];

  for (var i = 1; i < array.length; i++) {
    var value = array[i];
    if (currentSum + value > 0) {
      currentSum += value;
    }
    else {
      start = i + 1;
    }
    if (currentSum > bestSum) {
      bestStart = start;
      bestEnd = i;
      bestSum = currentSum;
    }
  }
  return array.slice(bestStart, bestEnd + 1);
};
