'use strict';

var hashFunctions = require('./hashFunctions');

function HashMap(capacity) {
  if (typeof capacity === 'undefined') {
    capacity = 16;
  }
  this.data = new Array(capacity);
  this.size = 0;
  this.maxLoadFactor = 0.75;
}

function Entry(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

HashMap.prototype.hash = function hash(string) {
  return hashFunctions.charCodeHash3(string) % this.data.length;
};

HashMap.prototype.expand = function expand() {
  // create a new array 2x the size and copy everything over
  var existingData = this.data;
  this.data = new Array(this.data.length * 2);
  this.size = 0;
  for (var i = 0; i < existingData.length; i++) {
    var entry = existingData[i];
    while (typeof entry !== 'undefined') {
      this.set(entry.key, entry.value);
      entry = entry.next;
    }
  }
};

HashMap.prototype.set = function set(key, value) {
  var bucket = this.hash(key);
  var entry = this.data[bucket];
  while (typeof entry !== 'undefined') {
    if (key === entry.key) {
      // found the key, replace the value
      entry.value = value;
      return;
    }
    entry = entry.next;
  }

  // no key found, add it to the bucket
  this.data[bucket] = new Entry(key, value, this.data[bucket]);
  this.size++;
  if (this.size / this.data.length > this.maxLoadFactor) {
    this.expand();
  }
};

HashMap.prototype.has = function has(key) {
  var bucket = this.hash(key);
  var entry = this.data[bucket];
  while (typeof entry !== 'undefined') {
    if (key === entry.key) {
      return true;
    }
  }
  return false;
};

HashMap.prototype.get = function get(key) {
  var bucket = this.hash(key);
  var entry = this.data[bucket];
  while (typeof entry !== 'undefined') {
    if (key === entry.key) {
      return entry.value;
    }
    entry = entry.next;
  }
  return undefined;
};

HashMap.prototype.delete = function deleteKey(key) {
  var bucket = this.hash(key);
  var entry = this.data[bucket];
  var previous = null;
  while (typeof entry !== 'undefined') {
    if (key === entry.key) {
      this.size--;
      if (previous === null) {
        this.data[bucket] = entry.next;
        return;
      }
      previous.next = entry.next;
      return;
    }
    previous = entry;
    entry = entry.next;
  }
};

module.exports = HashMap;
