'use strict';

var hashFunctions = require('./hashFunctions');

function Entry(value) {
  this.value = value;
  this.next = null;
}

function HashSet(size) {
  if (typeof size === 'number' && size > 0) {
    this.size = size;
  } else {
    this.size = 100;
  }
  this.hashSet = new Array(this.size);
}

HashSet.prototype.hashCode = function hashCode(key) {
  return hashFunctions.charCodeHash3(key) % this.size;
};

HashSet.prototype.add = function add(key) {
  var index = this.hashCode(key);
  var entry = this.hashSet[index];
  if (!(entry instanceof Entry)) {
    this.hashSet[index] = new Entry(key);
  } else {
    while (true) {
      if (entry.value === key) {
        throw new Error('Item already exists');
      }
      if (entry.next === null) {
        break;
      }
      entry = entry.next;
    }
    entry.next = new Entry(key);
  }
};

HashSet.prototype.has = function has(key) {
  var entry = this.hashSet[this.hashCode(key)];
  if (entry instanceof Entry) {
    while (true) {
      if (entry.value === key) {
        return true;
      }
      if (entry.next === null) {
        break;
      }
      entry = entry.next;
    }
  }
  return false;
};

module.exports = HashSet;