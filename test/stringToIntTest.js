'use strict';

var assert = require('assert'),
    stringToInt   = require('../stringToInt');

describe('stringToInt()', function() {
  it('should convert a string to an integer', function() {
    // arrange, act
    var actual = stringToInt('49802348');

    // assert
    assert.equal(actual, 49802348);
  });

  it('should convert a string to an integer when it\'s negative', function() {
    // arrange, act
    var actual = stringToInt('-321918');

    // assert
    assert.equal(actual, -321918);
  });
});
