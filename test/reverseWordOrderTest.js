'use strict';

var assert            = require('assert'),
    reverseWordOrder  = require('../reverseWordOrder');

describe('reverseWordOrder()', function() {
  it('should reverse the order of words in a string', function() {
    // arrange, act
    var actual = reverseWordOrder('the quick brown fox jumped over the lazy dog');

    // assert
    assert.equal(actual, 'dog lazy the over jumped fox brown quick the');
  });
});
