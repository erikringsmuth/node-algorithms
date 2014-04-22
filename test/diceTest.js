'use strict';

var assert  = require('assert'),
    dice    = require('../dice');

describe('roll()', function() {
  it('should roll a number between 1 and 6 inclusive', function() {
    // arrange, act
    var actual = dice.roll();

    // assert
    assert.equal(actual >= 1 && actual <= 6, true);
  });
  
  it('should roll a number between 1 and 6 inclusive 2', function() {
    // arrange, act
    var actual = dice.roll();

    // assert
    assert.equal(actual >= 1 && actual <= 6, true);
  });
  
  it('should roll a number between 1 and 6 inclusive 3', function() {
    // arrange, act
    var actual = dice.roll();

    // assert
    assert.equal(actual >= 1 && actual <= 6, true);
  });
});
