'use strict';

var assert  = require('assert'),
    HashSet = require('../hashSet');

describe('HashSet', function() {
  it('should correctly determine if the hash add has an element after adding it', function() {
    // arrange
    var hashSet = new HashSet();
    hashSet.add('hello');

    // act
    var actual = hashSet.has('hello');

    // assert
    assert.equal(actual, true);
  });

  it('should not say the add has an item that wasn\'t added', function() {
    // arrange
    var hashSet = new HashSet();
    hashSet.add('hello');

    // act
    var actual = hashSet.has('hello1');

    // assert
    assert.equal(actual, false);
  });

  it('should be able to handle more items than the number of buckets in the hash table', function() {
    // arrange
    var hashSet = new HashSet(1);
    hashSet.add('hello');
    hashSet.add('hello2');
    hashSet.add('hello3');

    // act
    // assert
    assert.equal(hashSet.has('hello'), true);
    assert.equal(hashSet.has('hello2'), true);
    assert.equal(hashSet.has('hello3'), true);
  });

  it('should throw when adding the same key multiple times', function() {
    // arrange
    var hashSet = new HashSet();
    hashSet.add('hello');

    // act
    // assert
    assert.throws(function() { hashSet.add('hello'); }, /exists/);
  });
});
