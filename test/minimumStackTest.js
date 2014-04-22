'use strict';

var assert        = require('assert'),
    MinimumStack  = require('../minimumStack');

describe('MinimumStack', function() {
  it('should be able to find the minimum value in O(1) time', function() {
    // arrange
    var stack = new MinimumStack();
    stack.push(8);
    stack.push(2);
    stack.push(7);
    stack.push(5);
    stack.push(4);
    stack.push(7);
    stack.push(1);
    stack.pop();

    // act
    var actual = stack.minimum();

    // assert
    assert.deepEqual(actual, 2);
  });

  it('should be able to find the minimum value in O(1) time 2', function() {
    // arrange
    var stack = new MinimumStack();
    stack.push(8);
    stack.push(2);
    stack.push(7);
    stack.push(5);
    stack.push(1);
    stack.push(7);
    stack.push(4);
    stack.push(3);
    stack.push(34);
    stack.push(5);
    stack.push(0);
    stack.push(0);
    stack.pop();
    stack.pop();

    // act
    var actual = stack.minimum();

    // assert
    assert.deepEqual(actual, 1);
  });
});
