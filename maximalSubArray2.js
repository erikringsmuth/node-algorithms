'use strict';

module.exports = function maximalSubArray(array) {
  if (array.length <= 1) {
    return array;
  }
  var max = array[0];
  var previous = max > 0 ? max : 0;
  var start = previous > 0 ? 0 : 1;
  var bestStart = 0;
  var bestEnd = 0;

  for (var i = 1; i < array.length; i++) {
    // is the current sum greater than the previous max sum?
    var current = previous + array[i];
    if (current > max) {
      max = current;
      bestEnd = i;
      bestStart = start;
      previous = current;
    }

    // does the current item keep the sum above zero?
    if (current <= 0) {
      start = i + 1;
      current = 0;
    }

    previous = current;
  }

  return array.slice(bestStart, bestEnd + 1);
};
