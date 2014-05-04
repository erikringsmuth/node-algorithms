'use strict';

function partition(a, start, end) {
  var length = end - start + 1;
  if (length <= 1) {
    return;
  }
  var left = start;
  var right = end;

  // swap values less than the pivot with values greater than the pivot
  var pivot = a[(Math.floor(Math.random() * length) % length) + left];
  while (left < right) {
    while (a[left] < pivot) {
      left++;
    }
    while (a[right] > pivot) {
      right--;
    }
    var temp = a[left];
    a[left] = a[right];
    a[right] = temp;
  }

  // partition the sub-arrays
  partition(a, start, left - 1);
  partition(a, left + 1, end);
}

module.exports = function quickSort(array) {
  partition(array, 0, array.length - 1);
  return array;
};
