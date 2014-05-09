'use strict';

function partition(array, start, end) {
  if (end <= start) {
    return;
  }
  var length = end - start + 1;
  var left = start;
  var right = end;
  var pivot = array[Math.floor(length * Math.random()) + start];
  while (left < right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  partition(array, start, left - 1);
  partition(array, left + 1, end);
}

module.exports = function quickSort(array) {
  partition(array, 0, array.length - 1);
  return array;
};
