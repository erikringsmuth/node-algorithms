'use strict';

var assert      = require('assert'),
    BinaryTree  = require('../binaryTree');

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

describe('BinaryTree', function() {
  it('should be traversable in-order', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(50);
    binaryTree.put(17);
    binaryTree.put(72);
    binaryTree.put(12);
    binaryTree.put(23);
    binaryTree.put(54);
    binaryTree.put(76);
    binaryTree.put(9);
    binaryTree.put(14);
    binaryTree.put(19);
    binaryTree.put(67);

    // act
    var actual = binaryTree.inOrderArray();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be traversable pre-order', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(50);
    binaryTree.put(17);
    binaryTree.put(72);
    binaryTree.put(12);
    binaryTree.put(23);
    binaryTree.put(54);
    binaryTree.put(76);
    binaryTree.put(9);
    binaryTree.put(14);
    binaryTree.put(19);
    binaryTree.put(67);

    // act
    var actual = binaryTree.preOrderArray();

    // assert
    assert.deepEqual(actual, [50, 17, 12, 9, 14, 23, 19, 72, 54, 67, 76]);
  });

  it('should be traversable post-order', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(50);
    binaryTree.put(17);
    binaryTree.put(72);
    binaryTree.put(12);
    binaryTree.put(23);
    binaryTree.put(54);
    binaryTree.put(76);
    binaryTree.put(9);
    binaryTree.put(14);
    binaryTree.put(19);
    binaryTree.put(67);

    // act
    var actual = binaryTree.postOrderArray();

    // assert
    assert.deepEqual(actual, [9, 14, 12, 19, 23, 17, 67, 54, 76, 72, 50]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(72);
    binaryTree.put(76);
    binaryTree.put(54);
    binaryTree.put(19);
    binaryTree.put(9);
    binaryTree.put(23);
    binaryTree.put(17);
    binaryTree.put(67);
    binaryTree.put(12);
    binaryTree.put(14);
    binaryTree.put(50);

    // act
    var actual = binaryTree.inOrderArray();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items again', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(9);
    binaryTree.put(12);
    binaryTree.put(14);
    binaryTree.put(17);
    binaryTree.put(19);
    binaryTree.put(23);
    binaryTree.put(50);
    binaryTree.put(54);
    binaryTree.put(67);
    binaryTree.put(72);
    binaryTree.put(76);

    // act
    var actual = binaryTree.inOrderArray();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be able to identify if a tree contains an entry', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(50);
    binaryTree.put(17);
    binaryTree.put(72);
    binaryTree.put(12);
    binaryTree.put(23);
    binaryTree.put(54);
    binaryTree.put(76);
    binaryTree.put(9);
    binaryTree.put(14);
    binaryTree.put(19);
    binaryTree.put(67);

    // act
    var actual = binaryTree.contains(67);

    // assert
    assert.equal(actual, true);
  });

  it('should be able to identify if a tree does not contain an entry', function() {
    // arrange
    var binaryTree = new BinaryTree();
    binaryTree.put(50);
    binaryTree.put(17);
    binaryTree.put(72);
    binaryTree.put(12);
    binaryTree.put(23);
    binaryTree.put(54);
    binaryTree.put(76);
    binaryTree.put(9);
    binaryTree.put(14);
    binaryTree.put(19);
    binaryTree.put(67);

    // act
    var actual = binaryTree.contains(68);

    // assert
    assert.equal(actual, false);
  });
});
