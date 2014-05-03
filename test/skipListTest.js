'use strict';

var assert    = require('assert'),
    SkipList  = require('../skipList');

describe('SkipList', function() {
  describe('find(key)', function() {
    it('should return the value assigned to the key', function() {
      // arrange
      var skipList = new SkipList();
      skipList.insert('hello', 'you');

      // act
      var actual = skipList.find('hello');

      // assert
      assert.equal(actual, 'you');
    });

    it('should return undefined if it isn\'t found', function() {
      // arrange
      var skipList = new SkipList();
      skipList.insert('hello');

      // act
      var actual = skipList.find('hello1');

      // assert
      assert.equal(actual, undefined);
    });
  });

  describe('insert(key, value)', function() {
    it('should insert the value to the key', function() {
      // arrange
      var skipList = new SkipList();

      // act
      skipList.insert('hello', 'you');

      // assert
      assert.equal(skipList.find('hello'), 'you');
    });
  });

  describe('delete(key)', function() {
    it('should delete the entry', function() {
      // arrange
      var skipList = new SkipList();
      skipList.insert('hello', 'you');

      // act
      skipList.delete('hello');

      // assert
      assert.equal(skipList.has('hello'), false);
    });
  });

  describe('first', function() {
    it('should return the first (lowest) value in the skip list', function() {
      // arrange
      var skipList = new SkipList();
      skipList.insert('hello2', 'you2');
      skipList.insert('hello3', 'you3');
      skipList.insert('hello1', 'you1');
      skipList.insert('hello4', 'you4');
      skipList.insert('hello5', 'you5');

      // act
      var actual = skipList.first;

      // assert
      assert.equal(actual.value, 'you1');
    });
  });

  describe('values()', function() {
    it('should an ordered array of the values in the skip list', function() {
      // arrange
      var skipList = new SkipList();
      skipList.insert('hello2', 'you2');
      skipList.insert('hello3', 'you3');
      skipList.insert('hello1', 'you1');
      skipList.insert('hello4', 'you4');
      skipList.insert('hello5', 'you5');

      // act
      var actual = skipList.values();

      // assert
      assert.deepEqual(actual, ['you1', 'you2', 'you3', 'you4', 'you5']);
    });
  });
});
