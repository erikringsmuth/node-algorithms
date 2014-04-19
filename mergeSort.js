'use strict';

function merge(arr1, arr2) {
  var a = [];

  // zip while there are elements in both arrays
  while(arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      a.push(arr1.shift());
    }
    else {
      a.push(arr2.shift());
    }
  }

  // then concat any items left in one of the arrays and return
  return a.concat(arr1).concat(arr2);
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
