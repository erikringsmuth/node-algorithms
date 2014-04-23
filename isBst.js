'use strict';

function Entry(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

function isValidBst(node, min, max) {
  // check if this node is outside of the min and max
  if (min !== null && node.value < min || max !== null && node.value > max) {
    return false;
  }
  // the left child should have the same min as this node and the max of this node's value
  if (node.left !== null && !isValidBst(node.left, min, node.value)) {
    return false;
  }
  // the right child should have the same max as this node and the min of this node's value
  if (node.right !== null && !isValidBst(node.right, node.value, max)) {
    return false;
  }
  return true;
}

module.exports = {
  isBst: function isBst(tree) {
    return isValidBst(tree, null, null);
  },
  Entry: Entry
};
