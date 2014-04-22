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

module.exports = function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var middle = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle, array.length)));
};
