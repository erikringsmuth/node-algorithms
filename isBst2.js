'use strict';

module.exports = function isBst(node, min, max) {
  if (!node) {
    return true;
  }
  if (typeof min !== 'undefined' && node.value < min || typeof max !== 'undefined' && node.value > max) {
    return false;
  }
  return isBst(node.left, min, node.value) && isBst(node.right, node.value, max);
};
