'use strict';

var assert        = require('assert'),
    permutations  = require('../permutations');

describe('permutations()', function() {
  it('should create an array of all permutations of the string', function() {
    // arrange
    // act
    var actual = permutations('abc');

    // assert
    assert.deepEqual(actual, ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });
});
