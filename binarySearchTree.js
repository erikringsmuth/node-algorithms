'use strict';

function BinarySearchTree() {
  this.root = null;
}

function Entry(value, parent) {
  this.left = null;
  this.right = null;
  this.parent = parent || null;
  this.value = value;
}

function insertInSubTree(node, value) {
  if (value === node.value) {
    throw new Error('Item already exists in the BST');
  }
  else if (value < node.value) {
    if (node.left === null) {
      node.left = new Entry(value, node);
    }
    else {
      insertInSubTree(node.left, value);
    }
  }
  else if (value > node.value) {
    if (node.right === null) {
      node.right = new Entry(value, node);
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

function getFromSubTree(node, value) {
  if (node === null) {
    return null;
  }
  else if (value === node.value) {
    return node;
  }
  else if (value < node.value) {
    return getFromSubTree(node.left, value);
  }
  else if (value > node.value) {
    return getFromSubTree(node.right, value);
  }
}

BinarySearchTree.prototype.has = function has(value) {
  return getFromSubTree(this.root, value) !== null;
};

BinarySearchTree.prototype.get = function get(value) {
  return getFromSubTree(this.root, value);
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

function shortestPath(start, end, parent) {
  var path = [];
  // add items from the left to the parent
  while (start.value !== parent.value) {
    path.push(start.value);
    start = start.parent;
  }
  // add the parent
  path.push(parent.value);
  // add items from the parent to the right
  while (true) {
    if (parent.value === end.value) {
      return path;
    }
    else if (parent.value < end.value) {
      path.push(parent.right.value);
      parent = parent.right;
    }
    else {
      path.push(parent.left.value);
      parent = parent.left;
    }
  }
}

BinarySearchTree.prototype.path = function(start, end) {
  // Find the shortest path from start to end. Add the parents of start
  // and end to a set until one of the parents is already in the set.
  // This is a parent of both start and end.
  var set = new BinarySearchTree(),
      startNode = this.get(start),
      endNode = this.get(end),
      a = startNode,
      b = endNode;
  while (true) {
    if (set.has(a.value)) {
      return shortestPath(startNode, endNode, a);
    }
    else {
      set.add(a.value);
      a = a.parent;
    }
    if (set.has(b.value)) {
      return shortestPath(startNode, endNode, b);
    }
    else {
      set.add(b.value);
      b = b.parent;
    }
  }
};

module.exports = BinarySearchTree;
