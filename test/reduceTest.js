'use strict';

var assert  = require('assert');

describe('reduce', function() {
  it('an array of integers and count odds', function() {
    // arrange
    var a = [2, 4, 9, 4, 9, 3, 5, 2, 3];

    // act
    var b = a.reduce(function(p, c) { return p + c % 2; }, 0);

    // assert
    assert.equal(b, 5);
  });

  it('an array of integers and count evens', function() {
    // arrange
    var a = [2, 4, 9, 4, 9, 3, 5, 2, 3];

    // act
    var b = a.reduce(function(p, c) { return p + (c % 2 === 0 ? 1 : 0); }, 0);

    // assert
    assert.equal(b, 4);
  });
});
