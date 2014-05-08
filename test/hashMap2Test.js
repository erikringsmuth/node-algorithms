'use strict';

var assert  = require('assert'),
    HashMap = require('../hashMap2');

describe('HashMap', function() {
  describe('has(key)', function() {
    it('should return true if the hash map contains the key', function() {
      // arrange
      var hashSet = new HashMap();
      hashSet.set('hello', 'you');

      // act
      var actual = hashSet.has('hello');

      // assert
      assert.equal(actual, true);
    });

    it('should return false if the hash map does not contain the key', function() {
      // arrange
      var hashSet = new HashMap();
      hashSet.set('hello');

      // act
      var actual = hashSet.has('hello1');

      // assert
      assert.equal(actual, false);
    });
  });

  describe('get(key)', function() {
    it('should return the value assigned to the key', function() {
      // arrange
      var hashSet = new HashMap();
      hashSet.set('hello', 'you');

      // act
      var actual = hashSet.get('hello');

      // assert
      assert.equal(actual, 'you');
    });

    it('should return undefined if no value is assigned to the key', function() {
      // arrange
      var hashSet = new HashMap();
      hashSet.set('hello');

      // act
      var actual = hashSet.get('hello1');

      // assert
      assert.equal(actual, undefined);
    });
  });

  describe('set(key, value)', function() {
    it('should set the value to the key', function() {
      // arrange
      var hashSet = new HashMap();

      // act
      hashSet.set('hello', 'you');

      // assert
      assert.equal(hashSet.get('hello'), 'you');
    });

    it('should expand the underlying data structure when the load factor is greater than 0.75', function() {
      // arrange
      var hashSet = new HashMap(4);

      // act
      hashSet.set('hello', 'you');
      hashSet.set('hello2', 'you2');
      hashSet.set('hello3', 'you3');
      hashSet.set('hello4', 'you4');
      hashSet.set('hello5', 'you5');

      // assert
      assert.equal(hashSet.data.length, 8);
      assert.equal(hashSet.get('hello'), 'you');
      assert.equal(hashSet.get('hello2'), 'you2');
      assert.equal(hashSet.get('hello3'), 'you3');
      assert.equal(hashSet.get('hello4'), 'you4');
      assert.equal(hashSet.get('hello5'), 'you5');
    });
  });

  describe('delete(key)', function() {
    it('should delete the value assigned to the key', function() {
      // arrange
      var hashSet = new HashMap();
      hashSet.set('hello', 'you');

      // act
      hashSet.delete('hello');

      // assert
      assert.equal(hashSet.has('hello'), false);
    });

    it('should decrease the size property', function() {
      // arrange
      var hashSet = new HashMap();
      hashSet.set('hello', 'you');
      hashSet.set('hello2', 'you2');

      // act
      hashSet.delete('hello');

      // assert
      assert.equal(hashSet.size, 1);
    });
  });
});
