'use strict';

var assert  = require('assert'),
    isBst   = require('../isBst2');

function Entry(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

describe('isBst()', function() {
  it('should return true if the tree is a valid BST', function() {
    // arrange
    /**
      Example valid BST

                    50
                  /    \
               17       72
              /  \     /  \
            12    23 54   76
           /  \   /   \
          9   14 19    67
    */
    var tree = new Entry(50);
    var nine = new Entry(9);
    var twelve = new Entry(12);
    var fourteen = new Entry(14);
    var seventeen = new Entry(17);
    var nineteen = new Entry(19);
    var twentyThree = new Entry(23);
    var fiftyFour = new Entry(54);
    var sixtySeven = new Entry(67);
    var seventyTwo = new Entry(72);
    var seventySix = new Entry(76);
    tree.left = seventeen;
    tree.right = seventyTwo;
    seventeen.left = twelve;
    seventeen.right = twentyThree;
    twelve.left = nine;
    twelve.right = fourteen;
    twentyThree.left = nineteen;
    seventyTwo.left = fiftyFour;
    fiftyFour.right = sixtySeven;
    seventyTwo.right = seventySix;

    // act
    var actual = isBst(tree);

    // assert
    assert.equal(actual, true);
  });

  it('should return false if the tree is not a valid BST', function() {
    // arrange
    /**
      Example invalid BST

            16
          /    \
       17       72
    */
    var tree = new Entry(16);
    var seventeen = new Entry(17);
    var seventyTwo = new Entry(72);
    tree.left = seventeen;
    tree.right = seventyTwo;

    // act
    var actual = isBst(tree);

    // assert
    assert.equal(actual, false);
  });

  it('should return false if the tree is not a valid BST', function() {
    // arrange
    /**
      Example invalid BST - 18 is greater than it's grandparent

                    50
                  /    \
               17       72
              /  \     /  \
            12    23 54   76
           /  \   /   \
          9   18 19    67
    */
    var tree = new Entry(50);
    var nine = new Entry(9);
    var twelve = new Entry(12);
    var eighteen = new Entry(18);
    var seventeen = new Entry(17);
    var nineteen = new Entry(19);
    var twentyThree = new Entry(23);
    var fiftyFour = new Entry(54);
    var sixtySeven = new Entry(67);
    var seventyTwo = new Entry(72);
    var seventySix = new Entry(76);
    tree.left = seventeen;
    tree.right = seventyTwo;
    seventeen.left = twelve;
    seventeen.right = twentyThree;
    twelve.left = nine;
    twelve.right = eighteen;
    twentyThree.left = nineteen;
    seventyTwo.left = fiftyFour;
    fiftyFour.right = sixtySeven;
    seventyTwo.right = seventySix;

    // act
    var actual = isBst(tree);

    // assert
    assert.equal(actual, false);
  });

  it('should return false if the tree is not a valid BST', function() {
    // arrange
    /**
      Example invalid BST - 8 is less than it's left siblings

                    50
                  /    \
               17       72
              /  \     /  \
            12    23 54   76
           /  \   /   \
          9   14 8    67
    */
    var tree = new Entry(50);
    var nine = new Entry(9);
    var twelve = new Entry(12);
    var fourteen = new Entry(14);
    var seventeen = new Entry(17);
    var eight = new Entry(8);
    var twentyThree = new Entry(23);
    var fiftyFour = new Entry(54);
    var sixtySeven = new Entry(67);
    var seventyTwo = new Entry(72);
    var seventySix = new Entry(76);
    tree.left = seventeen;
    tree.right = seventyTwo;
    seventeen.left = twelve;
    seventeen.right = twentyThree;
    twelve.left = nine;
    twelve.right = fourteen;
    twentyThree.left = eight;
    seventyTwo.left = fiftyFour;
    fiftyFour.right = sixtySeven;
    seventyTwo.right = seventySix;

    // act
    var actual = isBst(tree);

    // assert
    assert.equal(actual, false);
  });
});
