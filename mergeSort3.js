'use strict';

function merge(a, b) {
  var result = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] <= b[0]) {
      result.push(a.shift());
    }
    else {
      result.push(b.shift());
    }
  }
  return result.concat(a).concat(b);
}

module.exports = function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var middle = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle, array.length)));
};
