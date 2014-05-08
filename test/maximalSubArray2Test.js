'use strict';

var assert          = require('assert'),
    maximalSubArray = require('../maximalSubArray2');

describe('maximalSubArray(array)', function() {
  it('should return the sub-array with the largest sum', function() {
    // arrange
    var a = [1, -3, 5, -2, 9, -8, -6, 4];

    // act
    var actual = maximalSubArray(a);

    // assert
    assert.deepEqual(actual, [5, -2, 9]);
  });

  it('should handle arrays with all negative numbers', function() {
    // arrange
    var a = [-15, -30, -5, -2, -9, -8, -6, -40];

    // act
    var actual = maximalSubArray(a);

    // assert
    assert.deepEqual(actual, [-2]);
  });

  it('should set the first previous value correctly', function() {
    // arrange
    var a = [-15, 10, 2, -40, 9, 2, -5];

    // act
    var actual = maximalSubArray(a);

    // assert
    assert.deepEqual(actual, [10, 2]);
  });
});
