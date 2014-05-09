'use strict';

function merge(a, b) {
  var result = new Array(a.length + b.length);
  var i = 0;
  var aIndex = 0;
  var bIndex = 0;
  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] <= b[bIndex]) {
      result[i] = a[aIndex];
      aIndex++;
    }
    else {
      result[i] = b[bIndex];
      bIndex++;
    }
    i++;
  }
  while (aIndex < a.length) {
    result[i] = a[aIndex];
    aIndex++;
    i++;
  }
  while (bIndex < b.length) {
    result[i] = b[bIndex];
    bIndex++;
    i++;
  }
  return result;
}

module.exports = function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var middle = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle, array.length)));
};
