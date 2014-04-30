'use strict';

var assert  = require('assert'),
    Heap    = require('../heap');

/**
  initial array [13, 14, 15, 18, 11, 12, 17, 16]

  example heap built using insertions

                18
              /    \
           16       17
          /  \     /  \
        15    11 12   14
       /
      13
*/

describe('Heap.inOrder()', function() {
  it('should return an array of the heap traversed in-order', function() {
    // arrange
    var heap = new Heap();
    var a = [13, 14, 15, 18, 11, 12, 17, 16];
    for (var i = 0; i < a.length; i++) {
      heap.insert(a[i]);
    }

    // act
    var actual = heap.inOrder();

    // assert
    assert.deepEqual(actual, [13, 15, 16, 11, 18, 12, 17, 14]);
  });
});

describe('Heap.sort()', function() {
  it('should return a sorted array', function() {
    // arrange
    var heap = new Heap();
    var a = [13, 14, 15, 18, 11, 12, 17, 16];
    for (var i = 0; i < a.length; i++) {
      heap.insert(a[i]);
    }

    // act
    var actual = heap.sort();

    // assert
    assert.deepEqual(actual, [11, 12, 13, 14, 15, 16, 17, 18]);
  });
});
