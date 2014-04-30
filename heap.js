'use strict';

// In a 1 based array the child nodes are 2i and 2i+1. The parent is Math.floor(i/2).
// In a 0 based array the child nodes are 2i+1 and 2i+2. The parent is Math.floor((i-1)/2).

function Heap() {
  this.data = [];
}

function parentIndex(i) {
  if (i === 0) {
    return null;
  }
  return Math.floor((i - 1) / 2);
}

function leftIndex(i, maxLength) {
  var left = 2 * i + 1;
  if (typeof maxLength !== 'undefined' && left >= maxLength) {
    return null;
  }
  return left;
}

function rightIndex(i, maxLength) {
  var right = 2 * i + 2;
  if (typeof maxLength !== 'undefined' && right >= maxLength) {
    return null;
  }
  return right;
}

function swap(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

Heap.prototype.insert = function insert(value) {
  var i = this.data.length;
  var parent = parentIndex(i);

  // insert at the end
  this.data[i] = value;

  // then bubble it up till it's greater than all of it's children
  while (parent !== null && this.data[i] > this.data[parent]) {
    // swap with parent
    swap(this.data, parent, i);

    // compute new parent
    i = parent;
    parent = parentIndex(i);
  }
};

function addNodesInOrder(result, heap, current) {
  // left
  var left = leftIndex(current, heap.length);
  if (left) {
    addNodesInOrder(result, heap, left);
  }

  // this node
  result.push(heap[current]);

  // right
  var right = rightIndex(current, heap.length);
  if (right) {
    addNodesInOrder(result, heap, right);
  }
}

Heap.prototype.inOrder = function inOrder() {
  var result = [];
  addNodesInOrder(result, this.data, 0);
  return result;
};

Heap.prototype.sort = function sort() {
  // deep copy array
  var result = new Array(this.data.length);
  for (var i = 0; i < this.data.length; i++) {
    result[i] = this.data[i];
  }

  // We can sort the new array in-place. Delete items one at a time which
  // will move them to the end of the array. Deleting items effectivly sorts
  // them from least to greatest.
  var length = result.length;
  while (length > 1) {
    // swap the first item with the last item in the heap
    swap(result, 0, length - 1);
    length = length - 1;

    // move the first item down until it's a valid heap again
    var current = 0;
    while (true) {
      var left = leftIndex(current, length);
      var right = rightIndex(current, length);

      if (left === null) {
        // no children
        break;
      }

      if (right === null && result[current] < result[left]) {
        // left only and greater than left child
        swap(result, current, left);
        current = left;
      }
      else if (result[current] < result[left] || result[current] < result[right]) {
        if (result[left] > result[right]) {
          swap(result, current, left);
          current = left;
        }
        else {
          swap(result, current, right);
          current = right;
        }
      }
    }
  }

  return result;
};

module.exports = Heap;
