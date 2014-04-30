'use strict';

// In a 1 based array the child nodes are 2i and 2i+1. The parent is Math.floor(i/2).
// In a 0 based array the child nodes are 2i+1 and 2i+2. The parent is Math.floor((i-1)/2).

function Heap() {
  this.data = [];
}

Heap.prototype.insert = function insert(value) {
  var i = this.data.length;
  var parent = (i === 0) ? 0 : Math.floor((i - 1) / 2);

  // insert at the end
  this.data[i] = value;

  // then bubble it up till it's greater than all of it's children
  while (this.data[i] > this.data[parent]) {
    // swap with parent
    var temp = this.data[parent];
    this.data[parent] = this.data[i];
    this.data[i] = temp;

    // compute new parent
    i = parent;
    parent = (i === 0) ? 0 : Math.floor((i - 1) / 2);
  }
};

function addNodesInOrder(result, heap, nodeIndex) {
  // left
  var left = 2 * nodeIndex + 1;
  if (left < heap.length) {
    addNodesInOrder(result, heap, left);
  }

  // this node
  result.push(heap[nodeIndex]);

  // right
  var right = 2 * nodeIndex + 2;
  if (right < heap.length) {
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
    var temp = result[length - 1];
    result[length - 1] = result[0];
    result[0] = temp;
    length = length - 1;

    var current = 0;
    while (true) {
      var left = 2 * current + 1;
      var right = 2 * current + 2;

      // move the first item down until it's a valid heap again
      var lessThanLeft = left < length && result[current] < result[left];
      var lessThanRight = right < length && result[current] < result[right];
      var leftGreaterThanRight = right >= length || result[left] > result[right];
      if (lessThanLeft && leftGreaterThanRight) {
        // swap with the left child
        temp = result[left];
        result[left] = result[current];
        result[current] = temp;
        current = left;
      }
      else if (lessThanRight) {
        // swap with the right child
        temp = result[right];
        result[right] = result[current];
        result[current] = temp;
        current = right;
      }
      else {
        break;
      }
    }
  }

  return result;
};

module.exports = Heap;
