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
    bst.put(50);
    bst.put(17);
    bst.put(72);
    bst.put(12);
    bst.put(23);
    bst.put(54);
    bst.put(76);
    bst.put(9);
    bst.put(14);
    bst.put(19);
    bst.put(67);

    // act
    var actual = bst.inOrderArray();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be traversable pre-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(50);
    bst.put(17);
    bst.put(72);
    bst.put(12);
    bst.put(23);
    bst.put(54);
    bst.put(76);
    bst.put(9);
    bst.put(14);
    bst.put(19);
    bst.put(67);

    // act
    var actual = bst.preOrderArray();

    // assert
    assert.deepEqual(actual, [50, 17, 12, 9, 14, 23, 19, 72, 54, 67, 76]);
  });

  it('should be traversable post-order', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(50);
    bst.put(17);
    bst.put(72);
    bst.put(12);
    bst.put(23);
    bst.put(54);
    bst.put(76);
    bst.put(9);
    bst.put(14);
    bst.put(19);
    bst.put(67);

    // act
    var actual = bst.postOrderArray();

    // assert
    assert.deepEqual(actual, [9, 14, 12, 19, 23, 17, 67, 54, 76, 72, 50]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(72);
    bst.put(76);
    bst.put(54);
    bst.put(19);
    bst.put(9);
    bst.put(23);
    bst.put(17);
    bst.put(67);
    bst.put(12);
    bst.put(14);
    bst.put(50);

    // act
    var actual = bst.inOrderArray();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should stay sorted (traverse in-order) no matter what order you add items again', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(9);
    bst.put(12);
    bst.put(14);
    bst.put(17);
    bst.put(19);
    bst.put(23);
    bst.put(50);
    bst.put(54);
    bst.put(67);
    bst.put(72);
    bst.put(76);

    // act
    var actual = bst.inOrderArray();

    // assert
    assert.deepEqual(actual, [9, 12, 14, 17, 19, 23, 50, 54, 67, 72, 76]);
  });

  it('should be able to identify if a tree contains an entry', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(50);
    bst.put(17);
    bst.put(72);
    bst.put(12);
    bst.put(23);
    bst.put(54);
    bst.put(76);
    bst.put(9);
    bst.put(14);
    bst.put(19);
    bst.put(67);

    // act
    var actual = bst.contains(67);

    // assert
    assert.equal(actual, true);
  });

  it('should be able to identify if a tree does not contain an entry', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(50);
    bst.put(17);
    bst.put(72);
    bst.put(12);
    bst.put(23);
    bst.put(54);
    bst.put(76);
    bst.put(9);
    bst.put(14);
    bst.put(19);
    bst.put(67);

    // act
    var actual = bst.contains(68);

    // assert
    assert.equal(actual, false);
  });

  it('should throw an error if you try to add a duplicate value', function() {
    // arrange
    var bst = new BinarySearchTree();
    bst.put(50);
    bst.put(17);
    bst.put(72);

    // act, assert
    assert.throws(function() { bst.put(72); });
  });
});
