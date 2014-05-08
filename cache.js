'use strict';

/**
size = 4
lru = 0
[{key: 'one', value: 1}, {key: 'two', value: 2}, {key: 'three', value: 3}, {key: 'four', value: 4}]

put('five', 5)

lru = 1
[{key: 'five', value: 5}, {key: 'two', value: 2}, {key: 'three', value: 3}, {key: 'four', value: 4}]

get('three')

no-op? only consider least recently put?

[{key: 'five', value: 5}, {key: 'two', value: 2}, {key: 'three', value: 3}, {key: 'four', value: 4}]

*/

function Cache(capacity) {
  this.data = new Array(capacity || 8);
  this.lru = 0;
}

function Entry(key, value) {
  this.key = key;
  this.value = value;
}

Cache.prototype.put = function put(key, value) {
  for (var i = 0; i < this.data.length; i++) {
    var entry = this.data[i];
    if (typeof entry !== 'undefined' && entry.key === key) {
      entry.value = value;
      // todo: make mru
      return;
    }
  }

  // replace the least recently used with the new entry
  this.data[this.lru] = new Entry(key, value);
  this.lru = (this.lru + 1) % this.data.length;
};

Cache.prototype.get = function get(key) {
  for (var i = 0; i < this.data.length; i++) {
    var entry = this.data[i];
    if (typeof entry !== 'undefined' && entry.key === key) {
      return entry.value;
    }
  }
};

module.exports = Cache;
