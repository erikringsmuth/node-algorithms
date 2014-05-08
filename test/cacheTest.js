'use strict';

var assert = require('assert'),
    Cache  = require('../cache');

describe('Cache', function() {
  describe('get(key)', function() {
    it('should retrieve the value from the cache', function() {
      // arrange
      var cache = new Cache();
      cache.put('one', 1);
      
      // act
      var actual = cache.get('one');

      // assert
      assert.equal(actual, 1);
    });

    it('should return undefined if the value isn\'t found', function() {
      // arrange
      var cache = new Cache(2);
      cache.put('one', 1);
      cache.put('two', 2);
      cache.put('three', 3);
      
      // act
      var actual = cache.get('one');

      // assert
      assert.equal(actual, undefined);
    });
  });

  describe('put(key, value)', function() {
    it('should add the value to the cache', function() {
      // arrange
      var cache = new Cache();
      
      // act
      cache.put('one', 1);

      // assert
      var actual = cache.get('one');
      assert.equal(actual, 1);
    });

    it('should evict old values from the cache when the size is reached', function() {
      // arrange
      var cache = new Cache(2);
      cache.put('one', 1);
      cache.put('two', 2);
      
      // act
      cache.put('three', 3);

      // assert
      assert.equal(cache.get('one'), undefined);
      assert.equal(cache.get('two'), 2);
      assert.equal(cache.get('three'), 3);
    });
  });
});
