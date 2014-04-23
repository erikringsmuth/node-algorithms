'use strict';

var assert  = require('assert'),
    Queue = require('../queueStacks');

describe('Queue', function() {
  it('should return true if any two items in the array sum to x', function() {
    // arrange
    var q = new Queue();

    // act
    q.add(5);
    q.add(7);
    q.add(3);
    q.add(10);
    var actual = [];
    actual.push(q.remove());
    actual.push(q.remove());
    actual.push(q.remove());

    // assert
    assert.deepEqual(actual, [5, 7, 3]);
  });
});
