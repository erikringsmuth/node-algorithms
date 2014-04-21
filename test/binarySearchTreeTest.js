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
    bst.set(50);
    bst.set(17);
    bst.set(72);
    bst.set(12);
    bst.set(23);
    bst.set(54);
    bst.set(76);
    bst.set(9);
    bst.set(14);
    bst.set(19);
    bst.set(67);

    // act
    var actual = bst.inOrder();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be traversable pre-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(50);
    bst.set(17);
    bst.set(72);
    bst.set(12);
    bst.set(23);
    bst.set(54);
    bst.set(76);
    bst.set(9);
    bst.set(14);
    bst.set(19);
    bst.set(67);

    // act
    var actual = bst.preOrder();

    // assert
    assert.deepEqual(actual, [50, 17, 12, 9, 14, 23, 19, 72, 54, 67, 76]);
  });

  it('should be traversable post-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(50);
    bst.set(17);
    bst.set(72);
    bst.set(12);
    bst.set(23);
    bst.set(54);
    bst.set(76);
    bst.set(9);
    bst.set(14);
    bst.set(19);
    bst.set(67);

    // act
    var actual = bst.postOrder();

    // assert
    assert.deepEqual(actual, [9, 14, 12, 19, 23, 17, 67, 54, 76, 72, 50]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(72);
    bst.set(76);
    bst.set(54);
    bst.set(19);
    bst.set(9);
    bst.set(23);
    bst.set(17);
    bst.set(67);
    bst.set(12);
    bst.set(14);
    bst.set(50);

    // act
    var actual = bst.inOrder();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items again', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(9);
    bst.set(12);
    bst.set(14);
    bst.set(17);
    bst.set(19);
    bst.set(23);
    bst.set(50);
    bst.set(54);
    bst.set(67);
    bst.set(72);
    bst.set(76);

    // act
    var actual = bst.inOrder();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be able to identify if a tree has an entry', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(50);
    bst.set(17);
    bst.set(72);
    bst.set(12);
    bst.set(23);
    bst.set(54);
    bst.set(76);
    bst.set(9);
    bst.set(14);
    bst.set(19);
    bst.set(67);

    // act
    var actual = bst.has(67);

    // assert
    assert.equal(actual, true);
  });

  it('should be able to identify if a tree does not contain an entry', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(50);
    bst.set(17);
    bst.set(72);
    bst.set(12);
    bst.set(23);
    bst.set(54);
    bst.set(76);
    bst.set(9);
    bst.set(14);
    bst.set(19);
    bst.set(67);

    // act
    var actual = bst.has(68);

    // assert
    assert.equal(actual, false);
  });

  it('should throw an error if you try to add a duplicate value', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(50);
    bst.set(17);
    bst.set(72);

    // act, assert
    assert.throws(function() { bst.set(72); });
  });
  
  it('should be traversable as BFS', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.set(50);
    bst.set(17);
    bst.set(72);
    bst.set(12);
    bst.set(23);
    bst.set(54);
    bst.set(76);
    bst.set(9);
    bst.set(14);
    bst.set(19);
    bst.set(67);

    // act
    var actual = bst.bfs();

    // assert
    assert.deepEqual(actual, [50, 17, 72, 12, 23, 54, 76, 9, 14, 19, 67]);
  });
});
