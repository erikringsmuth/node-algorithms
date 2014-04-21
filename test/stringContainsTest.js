'use strict';

var assert    = require('assert'),
    stringContains = require('../stringContains');

describe('stringContains(str1, str2)', function() {
  it('should return true if str1 is a sub-string of str2', function() {
    // arrange, act
    var actual = stringContains('bat', 'abate');

    // assert
    assert.equal(actual, true);
  });

  it('should return false if str1 is not a sub-string of str2', function() {
    // arrange, act
    var actual = stringContains('bat', 'beat');

    // assert
    assert.equal(actual, false);
  });

  it('should return false if str1 is not a sub-string of str2', function() {
    // arrange, act
    var actual = stringContains('bat', 'sub');

    // assert
    assert.equal(actual, false);
  });
});
