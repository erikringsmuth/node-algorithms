'use strict';

function BinarySearchTree() {
  this.root = null;
}

function Entry(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

function insertInSubTree(node, value) {
  if (value === node.value) {
    throw new Error('Item already exists in the BST');
  }
  else if (value < node.value) {
    if (node.left === null) {
      node.left = new Entry(value);
    }
    else {
      insertInSubTree(node.left, value);
    }
  }
  else if (value > node.value) {
    if (node.right === null) {
      node.right = new Entry(value);
    }
    else {
      insertInSubTree(node.right, value);
    }
  }
}

BinarySearchTree.prototype.put = function put(value) {
  if (this.root === null) {
    this.root = new Entry(value);
  }
  else {
    insertInSubTree(this.root, value);
  }
};

function subTreeContains(node, value) {
  if (node === null) {
    return false;
  }
  else if (value === node.value) {
    return true;
  }
  else if (value < node.value) {
    return subTreeContains(node.left, value);
  }
  else if (value > node.value) {
    return subTreeContains(node.right, value);
  }
}

BinarySearchTree.prototype.contains = function contains(value) {
  return subTreeContains(this.root, value);
};

function addTreeInOrder(node, array) {
  if (node === null) return;
  addTreeInOrder(node.left, array);
  array.push(node.value);
  addTreeInOrder(node.right, array);
}

BinarySearchTree.prototype.inOrderArray = function() {
  var array = [];
  addTreeInOrder(this.root, array);
  return array;
};

function addTreePreOrder(node, array) {
  if (node === null) return;
  array.push(node.value);
  addTreePreOrder(node.left, array);
  addTreePreOrder(node.right, array);
}

BinarySearchTree.prototype.preOrderArray = function() {
  var array = [];
  addTreePreOrder(this.root, array);
  return array;
};

function addTreePostOrder(node, array) {
  if (node === null) return;
  addTreePostOrder(node.left, array);
  addTreePostOrder(node.right, array);
  array.push(node.value);
}

BinarySearchTree.prototype.postOrderArray = function() {
  var array = [];
  addTreePostOrder(this.root, array);
  return array;
};

module.exports = BinarySearchTree;
