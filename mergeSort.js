'use strict';

function merge(arr1, arr2) {
  var a = [], arr1Index = 0, arr2Index = 0;
  while(arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      a.push(arr1[arr1Index]);
      arr1Index++;
    }
    else {
      a.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  while (arr1Index < arr1.length) {
    a.push(arr1[arr1Index]);
    arr1Index++;
  }
  while (arr2Index < arr2.length) {
    a.push(arr2[arr2Index]);
    arr2Index++;
  }
  return a;
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
