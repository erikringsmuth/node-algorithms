'use strict';

var assert  = require('assert');

describe('xor to find the odd man out', function() {
  it('an array of pairs of integers except for one should return the odd man out when xored', function() {
    // arrange
    var a = [2, 4, 9, 4, 9, 3, 5, 2, 3];
    var b = 0;
    for (var i = 0; i < a.length; i++) {
      b = b ^ a[i];
    }
    assert.equal(b, 5);
  });
});
