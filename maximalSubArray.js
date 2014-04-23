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

  // loop through the array
  for (var i = 1; i < array.length; i++) {
    var value = array[i];

    // check if the currentSum of the current sub-array is greater than zero
    if (currentSum + value > 0) {
      currentSum += value;
    }
    else {
      // if the current sub-array is less than zero then it's not helping us
      // create a maximal sub-array
      start = i + 1;
      currentSum = 0;
    }
    if (currentSum > bestSum) {
      bestStart = start;
      bestEnd = i;
      bestSum = currentSum;
    }
  }
  return array.slice(bestStart, bestEnd + 1);
};
