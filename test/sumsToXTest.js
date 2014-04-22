'use strict';

var assert  = require('assert'),
    sumsToX = require('../sumsToX');

describe('sumsToX(x, array)', function() {
  it('should return true if any two items in the array sum to x', function() {
    // arrange, act
    var actual = sumsToX(12, [2, 4, 9, 4, 9, 3, 5, 2, 3]);

    // assert
    assert.equal(actual, true);
  });

  it('should return false if no two items in the array sum to x', function() {
    // arrange, act
    var actual = sumsToX(10, [2, 4, 9, 4, 9, 3, 5, 2, 3]);

    // assert
    assert.equal(actual, false);
  });
});
