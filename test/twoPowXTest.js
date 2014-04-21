'use strict';

var assert  = require('assert'),
    twoPowX = require('../twoPowX');

describe('twoPowX()', function() {
  it('of 0 should return 1', function() {
    assert.equal(twoPowX(0), 1);
  });

  it('of 1 should return 2', function() {
    assert.equal(twoPowX(1), 2);
  });

  it('of 2 should return 4', function() {
    assert.equal(twoPowX(2), 4);
  });

  it('of 3 should return 8', function() {
    assert.equal(twoPowX(3), 8);
  });

  it('of 10 should return 1024', function() {
    assert.equal(twoPowX(10), 1024);
  });
});
