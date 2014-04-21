'use strict';

var assert            = require('assert'),
    BinarySearchTree  = require('../binarySearchTree');

/**
  Example BST

                50
              /    \
           17       72
          /  \     /  \
        12    23 54   76
       /  \   /   \
      9   14 19    67

  in-order   [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]
  pre-order  [50, 17, 12, 9, 14, 23, 19, 72, 54, 67, 76]
  post-order [9, 14, 12, 19, 23, 17, 67, 54, 76, 72, 50]
*/

describe('BinarySearchTree', function() {
  it('should be traversable in-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.inOrder();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be traversable pre-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.preOrder();

    // assert
    assert.deepEqual(actual, [50, 17, 12, 9, 14, 23, 19, 72, 54, 67, 76]);
  });

  it('should be traversable post-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.postOrder();

    // assert
    assert.deepEqual(actual, [9, 14, 12, 19, 23, 17, 67, 54, 76, 72, 50]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(72);
    bst.add(76);
    bst.add(54);
    bst.add(19);
    bst.add(9);
    bst.add(23);
    bst.add(17);
    bst.add(67);
    bst.add(12);
    bst.add(14);
    bst.add(50);

    // act
    var actual = bst.inOrder();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items again', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(9);
    bst.add(12);
    bst.add(14);
    bst.add(17);
    bst.add(19);
    bst.add(23);
    bst.add(50);
    bst.add(54);
    bst.add(67);
    bst.add(72);
    bst.add(76);

    // act
    var actual = bst.inOrder();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be able to identify if a tree has an entry', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.has(67);

    // assert
    assert.equal(actual, true);
  });

  it('should be able to identify if a tree does not contain an entry', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.has(68);

    // assert
    assert.equal(actual, false);
  });

  it('should throw an error if you try to add a duplicate value', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);

    // act, assert
    assert.throws(function() { bst.add(72); });
  });
  
  it('should be traversable as BFS', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.bfs();

    // assert
    assert.deepEqual(actual, [50, 17, 72, 12, 23, 54, 76, 9, 14, 19, 67]);
  });
  
  it('should find the shortest path between nodes', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.path(14, 23);

    // assert
    assert.deepEqual(actual, [14, 12, 17, 23]);
  });

  it('should find the shortest path between nodes 2', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.add(50);
    bst.add(17);
    bst.add(72);
    bst.add(12);
    bst.add(23);
    bst.add(54);
    bst.add(76);
    bst.add(9);
    bst.add(14);
    bst.add(19);
    bst.add(67);

    // act
    var actual = bst.path(19, 54);

    // assert
    assert.deepEqual(actual, [19, 23, 17, 50, 72, 54]);
  });
});
