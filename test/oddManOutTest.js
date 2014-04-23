'use strict';

var assert    = require('assert'),
    oddManOut = require('../oddManOut');

describe('oddManOut()', function() {
  it('should find the odd man out', function() {
    // arrange
    var a = [2, 4, 9, 4, 9, 3, 5, 2, 3];

    // act
    var actual = oddManOut.oddManOut(a);

    // assert
    assert.equal(actual, 5);
  });
});

describe('oddManOutXor()', function() {
  it('should find the odd man out', function() {
    // arrange
    var a = [2, 4, 9, 4, 9, 3, 5, 2, 3];

    // act
    var actual = oddManOut.oddManOutXor(a);

    // assert
    assert.equal(actual, 5);
  });
});
