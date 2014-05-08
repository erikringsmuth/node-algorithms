'use strict';

function HashMap(capacity) {
  this.data = new Array(capacity || 8);
  this.size = 0;
  this.maxLoadFactor = 0.75;
}

function hash(string) {
  var h = 5381;
  for (var i = 0; i < string.length; i++) {
    h = (h << 5) + h + string.charCodeAt(i);
  }
  return h;
}

function Entry(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

HashMap.prototype.set = function set(key, value) {
  var bucket = hash(key) % this.data.length;
  var entry = this.data[bucket];
  while (entry) {
    if (entry.key === key) {
      entry.value = value;
      return;
    }
    entry = entry.next;
  }
  this.data[bucket] = new Entry(key, value, this.data[bucket]);
  this.size++;
  if (this.size / this.data.length > this.maxLoadFactor) {
    this.expand();
  }
};

HashMap.prototype.getEntry = function getEntry(key) {
  var bucket = hash(key) % this.data.length;
  var entry = this.data[bucket];
  while (entry) {
    if (entry.key === key) {
      return entry;
    }
    entry = entry.next;
  }
};

HashMap.prototype.get = function get(key) {
  var entry = this.getEntry(key);
  if (entry) {
    return entry.value;
  }
};

HashMap.prototype.has = function has(key) {
  var entry = this.getEntry(key);
  if (entry) {
    return true;
  }
  return false;
};

HashMap.prototype.delete = function deleteKey(key) {
  var bucket = hash(key) % this.data.length;
  var entry = this.data[bucket];
  if (entry.key === key) {
    this.data[bucket] = entry.next;
    this.size--;
    return;
  }
  var previous = entry;
  while (entry) {
    if (entry.key === key) {
      previous.next = entry.next;
      this.size--;
      return;
    }
    previous = entry;
    entry = entry.next;
  }
};

HashMap.prototype.expand = function expand() {
  var old = this.data;
  this.data = new Array(old.length * 2);
  this.size = 0;
  for (var i = 0; i < old.length; i++) {
    var entry = old[i];
    while (entry) {
      this.set(entry.key, entry.value);
      entry = entry.next;
    }
  }
};

module.exports = HashMap;
