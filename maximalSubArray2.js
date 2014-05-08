'use strict';

module.exports = function maximalSubArray(array) {
  var max = array[0];
  var previousSum = 0;
  var start = 0;
  var bestStart = 0;
  var bestEnd = 0;

  for (var i = 0; i < array.length; i++) {
    // is the current sum greater than the max sum?
    var currentSum = previousSum + array[i];
    if (currentSum > max) {
      max = currentSum;
      bestEnd = i;
      bestStart = start;
    }

    // the current sub-array can't help overall if it's sum is less than zero
    if (currentSum <= 0) {
      start = i + 1;
      currentSum = 0;
    }

    previousSum = currentSum;
  }

  return array.slice(bestStart, bestEnd + 1);
};
