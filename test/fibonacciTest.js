'use strict';

var assert    = require('assert'),
    fibonacci = require('../fibonacci');

describe('fibonacci()', function() {
  it('of 0 should return 0', function() {
    assert.equal(fibonacci.fibonacci(0), 0);
  });
  
  it('of 1 should return 1', function() {
    assert.equal(fibonacci.fibonacci(1), 1);
  });
  
  it('of 2 should return 1', function() {
    assert.equal(fibonacci.fibonacci(2), 1);
  });
  
  it('of 8 should return 21', function() {
    assert.equal(fibonacci.fibonacci(8), 21);
  });
  
  it('of 15 should return 610', function() {
    assert.equal(fibonacci.fibonacci(15), 610);
  });
});

describe('fibonacciIterative()', function() {
  it('of 0 should return 0', function() {
    assert.equal(fibonacci.fibonacciIterative(0), 0);
  });
  
  it('of 1 should return 1', function() {
    assert.equal(fibonacci.fibonacciIterative(1), 1);
  });
  
  it('of 2 should return 1', function() {
    assert.equal(fibonacci.fibonacciIterative(2), 1);
  });
  
  it('of 8 should return 21', function() {
    assert.equal(fibonacci.fibonacciIterative(8), 21);
  });
  
  it('of 15 should return 610', function() {
    assert.equal(fibonacci.fibonacciIterative(15), 610);
  });
});
