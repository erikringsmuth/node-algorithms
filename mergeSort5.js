'use strict';

function merge(a, b) {
  var result = new Array(a.length + b.length);
  var i = result.length - 1;
  while(a.length > 0 && b.length > 0) {
    if (b[b.length - 1] > a[a.length - 1]) {
      result[i] = b.pop();
    }
    else {
      result[i] = a.pop();
    }
    i--;
  }
  while (a.length > 0) {
    result[i] = a.pop();
    i--;
  }
  while (b.length > 0) {
    result[i] = b.pop();
    i--;
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
