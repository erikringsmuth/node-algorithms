'use strict';

var assert      = require('assert'),
    checkCycle  = require('../checkCycle');

describe('checkCycle', function() {
  it('should return false if no cycle is found', function() {
    // arrange
    var a = { value: '123' };
    var b = { value: '456' };
    var c = { value: 'sdf' };
    var d = { value: 'lcx' };
    var e = { value: 'cew' };
    var f = { value: '032' };
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    // act
    var actual = checkCycle(a);

    // assert
    assert.equal(actual, false);
  });

  it('should return true if a cycle is found', function() {
    // arrange
    var a = { value: '123' };
    var b = { value: '456' };
    var c = { value: 'sdf' };
    var d = { value: 'lcx' };
    var e = { value: 'cew' };
    var f = { value: '032' };
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    f.next = c;

    // act
    var actual = checkCycle(a);

    // assert
    assert.equal(actual, true);
  });
});
