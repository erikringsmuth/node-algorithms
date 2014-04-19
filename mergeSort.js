'use strict';

function merge(arr1, arr2) {
  var a = [], i1 = 0, i2 = 0;
  while(i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      a.push(arr1[i1]);
      i1++;
    }
    else {
      a.push(arr2[i2]);
      i2++;
    }
  }
  return a.concat(arr1.slice(i1, arr1.length)).concat(arr2.slice(i2, arr2.length));
}

module.exports = {
  mergeSort: function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    var splitIndex = Math.floor(array.length / 2);
    var arr1 = array.slice(0, splitIndex);
    var arr2 = array.slice(splitIndex, array.length);
    return merge(mergeSort(arr1), mergeSort(arr2));
  }
};
