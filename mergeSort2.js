'use strict';

function merge(a1, a2) {
  var results = [];
  while (a1.length > 0 && a2.length > 0) {
    if (a1[0] <= a2[0]) {
      results.push(a1.shift());
    }
    else {
      results.push(a2.shift());
    }
  }
  return results.concat(a1).concat(a2);
}

module.exports = function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var middle = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle, array.length)));
};
