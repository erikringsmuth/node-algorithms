'use strict';

var assert    = require('assert'),
    HashMap   = require('../hashMap'),
    SkipList  = require('../skipList');

describe('SkipList', function() {
  describe('get(key)', function() {
    it('should return the value assigned to the key', function() {
      // arrange
      var skipList = new SkipList();
      skipList.set('hello', 'you');

      // act
      var actual = skipList.get('hello');

      // assert
      assert.equal(actual, 'you');
    });

    it('should return undefined if it isn\'t found', function() {
      // arrange
      var skipList = new SkipList();
      skipList.set('hello');

      // act
      var actual = skipList.get('hello1');

      // assert
      assert.equal(actual, undefined);
    });
  });

  describe('set(key, value)', function() {
    it('should set the value to the key', function() {
      // arrange
      var skipList = new SkipList();

      // act
      skipList.set('hello', 'you');

      // assert
      assert.equal(skipList.get('hello'), 'you');
    });
  });

  describe('delete(key)', function() {
    it('should delete the entry', function() {
      // arrange
      var skipList = new SkipList();
      skipList.set('hello', 'you');

      // act
      skipList.delete('hello');

      // assert
      assert.equal(skipList.get('hello'), undefined);
    });
  });

  describe('values()', function() {
    it('should an ordered array of the values in the skip list', function() {
      // arrange
      var skipList = new SkipList();
      skipList.set('hello2', 'you2');
      skipList.set('hello3', 'you3');
      skipList.set('hello1', 'you1');
      skipList.set('hello4', 'you4');
      skipList.set('hello5', 'you5');

      // act
      var actual = skipList.values();

      // assert
      assert.deepEqual(actual, ['you1', 'you2', 'you3', 'you4', 'you5']);
    });

    it('handle a large list of numbers', function() {
      // arrange
      var skipList = new SkipList();
      var hashMap = new HashMap();
      var expected = [];
      for (var i = 0; i < 500; i++) {
        var val = 'k' + Math.floor(Math.random() * 10000);
        if (!hashMap.has(val)) {
          hashMap.set(val, val);
          skipList.set(val, val);
          expected.push(val);
        }
      }

      // act
      var actual = skipList.values();

      // assert
      assert.deepEqual(actual, expected.sort());
    });
  });
});
