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

BinarySearchTree.prototype.add = function add(value) {
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

BinarySearchTree.prototype.has = function has(value) {
  return subTreeContains(this.root, value);
};

function addTreeInOrder(node, array) {
  if (node === null) return;
  addTreeInOrder(node.left, array);
  array.push(node.value);
  addTreeInOrder(node.right, array);
}

BinarySearchTree.prototype.inOrder = function() {
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

BinarySearchTree.prototype.preOrder = function() {
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

BinarySearchTree.prototype.postOrder = function() {
  var array = [];
  addTreePostOrder(this.root, array);
  return array;
};

BinarySearchTree.prototype.bfs = function() {
  var array = [], queue = [];

  if (this.root !== null) {
    queue.push(this.root);
  }

  while(queue.length > 0) {
    var entry = queue.shift();
    array.push(entry.value);

    if (entry.left !== null) {
      queue.push(entry.left);
    }
    if (entry.right !== null) {
      queue.push(entry.right);
    }
  }

  return array;
};

module.exports = BinarySearchTree;
