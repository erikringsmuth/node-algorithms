'use strict';

var assert  = require('assert'),
    bitwise = require('../bitwise');

describe('twoPowX()', function() {
  it('of 0 should return 1', function() {
    assert.equal(bitwise.twoPowX(0), 1);
  });

  it('of 1 should return 2', function() {
    assert.equal(bitwise.twoPowX(1), 2);
  });

  it('of 2 should return 4', function() {
    assert.equal(bitwise.twoPowX(2), 4);
  });

  it('of 3 should return 8', function() {
    assert.equal(bitwise.twoPowX(3), 8);
  });

  it('of 10 should return 1024', function() {
    assert.equal(bitwise.twoPowX(10), 1024);
  });
});

describe('powOfTwo()', function() {
  it('of 2 should return true', function() {
    assert.equal(bitwise.powOfTwo(2), true);
  });
  
  it('of 8 should return true', function() {
    assert.equal(bitwise.powOfTwo(8), true);
  });
  
  it('of 1024 should return true', function() {
    assert.equal(bitwise.powOfTwo(1024), true);
  });
  
  it('of 726 should return false', function() {
    assert.equal(bitwise.powOfTwo(726), false);
  });
});
