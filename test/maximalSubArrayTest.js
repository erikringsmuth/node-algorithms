'use strict';

var assert          = require('assert'),
    maximalSubArray = require('../maximalSubArray');

describe('maximalSubArray(array)', function() {
  it('should return the sub-array with the largest sum', function() {
    // arrange
    var a = [1, -3, 5, -2, 9, -8, -6, 4];

    // act
    var actual = maximalSubArray(a);

    // assert
    assert.deepEqual(actual, [5, -2, 9]);
  });
});
