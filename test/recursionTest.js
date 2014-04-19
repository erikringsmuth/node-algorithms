'use strict';

var assert        = require('assert'),
    recursion = require('../recursion');

describe('findMin()', function() {
  it('should find the minimum value in the array', function() {
    // arrange
    var a = [9, 654, 56, 73, 6, 8, 4, 84];

    // act
    var actual = recursion.findMin(a);

    // assert
    assert.equal(actual, 4);
  });
});

describe('permutations()', function() {
  it('should create an array of all permutations of the string', function() {
    // arrange
    // act
    var actual = recursion.permutations('abc');

    // assert
    assert.deepEqual(actual, ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });
});
