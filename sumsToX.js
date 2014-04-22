'use strict';

var mergeSort = require('./mergeSort');

module.exports = function sumsToX(x, array) {
  var start = 0, end = array.length - 1;
  var sortedArray = mergeSort(array);

  while (start !== end) {
    var sum = sortedArray[start] + sortedArray[end];
    if (sum === x) {
      return true;
    }
    else if (sum > x) {
      end--;
    }
    else {
      start++;
    }
  }

  return false;
};
