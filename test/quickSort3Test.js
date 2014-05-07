'use strict';

var assert    = require('assert'),
    quickSort = require('../quickSort3');

describe('quickSort()', function() {
  it('should order the items in an array', function() {
    // arrange
    var a = [3, 7, 2020, -4, 27, 2, 4, 500];

    // act
    var actual = quickSort(a);

    // assert
    assert.deepEqual(actual, [-4, 2, 3, 4, 7, 27, 500, 2020]);
  });

  it('should order the items in an array', function() {
    // arrange
    var a = [24, 5, 3, 35, 14, 23, 19, 43, 2];

    // act
    var actual = quickSort(a);

    // assert
    assert.deepEqual(actual, [2, 3, 5, 14, 19, 23, 24, 35, 43]);
  });

  it('should handle an empty array', function() {
    // arrange
    var a = [];

    // act
    var actual = quickSort(a);

    // assert
    assert.deepEqual(actual, []);
  });

  it('should handle an array with 1 item', function() {
    // arrange
    var a = [2];

    // act
    var actual = quickSort(a);

    // assert
    assert.deepEqual(actual, [2]);
  });
});
