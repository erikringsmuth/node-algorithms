'use strict';

var assert  = require('assert'),
    HashSet = require('../hashSet');

describe('HashSet', function() {
  it('should correctly determine if the hash set has an element after seting it', function() {
    // arrange
    var hashSet = new HashSet();
    hashSet.set('hello');

    // act
    var actual = hashSet.has('hello');

    // assert
    assert.equal(actual, true);
  });

  it('should not say the set has an item that wasn\'t set', function() {
    // arrange
    var hashSet = new HashSet();
    hashSet.set('hello');

    // act
    var actual = hashSet.has('hello1');

    // assert
    assert.equal(actual, false);
  });

  it('should be able to handle more items than the number of buckets in the hash table', function() {
    // arrange
    var hashSet = new HashSet(1);
    hashSet.set('hello');
    hashSet.set('hello2');
    hashSet.set('hello3');

    // act
    // assert
    assert.equal(hashSet.has('hello'), true);
    assert.equal(hashSet.has('hello2'), true);
    assert.equal(hashSet.has('hello3'), true);
  });

  it('should throw when seting the same key multiple times', function() {
    // arrange
    var hashSet = new HashSet();
    hashSet.set('hello');

    // act
    // assert
    assert.throws(function() { hashSet.set('hello'); }, /exists/);
  });
});
