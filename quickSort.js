'use strict';

function swap(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function partition(array, start, end) {
  var left, right, pivot,
    length = end - start;

  if (length < 1) {
    return;
  }

  left = start;
  right = end;
  pivot = array[start + Math.floor(Math.random() * length) % length];

  while (left < right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    swap(array, left, right);
  }

  partition(array, start, left - 1);
  partition(array, left + 1, end);
}

module.exports = function quickSort(array) {
  partition(array, 0, array.length - 1);
  return array;
};
