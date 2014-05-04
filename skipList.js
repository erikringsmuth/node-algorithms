'use strict';

function Entry(key, value, next, child) {
  this.key = key;
  this.value = value;
  this.next = next || null;
  this.child = child || null;
}

function SkipList() {
  // rows are dynamically added as items are added and they bubble up to the
  // higher rows
  //
  // head[2]             9,         54
  // head[1]    3,       9, 23,     54
  // head[0] 1, 3, 4, 7, 9, 23, 53, 54, 81
  this.head = [];
}

SkipList.prototype.set = function set(key, value) {
  // check for existing entries and keep track of the entry in each
  // row that is less than the new value
  var previousInRow = [];
  var row = this.head.length - 1;
  var entry = this.head[row];
  var previous = null;
  while (entry) {
    if (key === entry.key) {
      entry.value = value;
      while (entry.child) {
        entry = entry.child;
        entry.value = value;
      }
      return;
    }
    if (key > entry.key) {
      if (entry.next === null) {
        previousInRow.push(entry);
        row--;
        entry = entry.child;
        previous = entry;
      }
      else {
        previous = entry;
        entry = entry.next;
      }
    }
    else {
      // new key less than skip list key
      previousInRow.push(previous);
      if (previous) {
        entry = previous.child;
        previous = entry;
      }
      else {
        row--;
        entry = this.head[row];
        previous = null;
      }
    }
  }

  // not found, add the entry
  var newEntry = null;
  row = 0;
  while (true) {
    previous = previousInRow.pop();
    if (previous) {
      // there is a previous entry at this row
      newEntry = new Entry(key, value, previous.next, newEntry);
      previous.next = newEntry;
    }
    else {
      newEntry = new Entry(key, value, this.head[row], newEntry);
      this.head[row] = newEntry;
    }
    // flip a coin and keep adding it to the higher rows
    if (Math.random() > 0.5) {
      break;
    }
    row++;
  }
};

SkipList.prototype.get = function get(key) {
  var entry = this.getEntry(key);
  if (entry) {
    return entry.value;
  }
  return null;
};

SkipList.prototype.getEntry = function getEntry(key) {
  // get the entry from the top linked list
  var row = this.head.length - 1;
  var entry = this.head[row];
  var previous = null;
  while (entry) {
    if (key === entry.key) {
      return entry;
    }
    if (key > entry.key) {
      if (entry.next === null) {
        row--;
        entry = entry.child;
        previous = entry;
      }
      else {
        previous = entry;
        entry = entry.next;
      }
    }
    else {
      // new key less than skip list key, go to the previous entry's child
      row--;
      if (previous) {
        entry = previous.child;
        previous = entry;
      }
      else {
        entry = this.head[row];
        previous = entry;
      }
    }
  }
  return null;
};

SkipList.prototype.delete = function deleteKey(key) {
  var row = this.head.length - 1;
  var entry = this.head[row];
  var previous = null;
  while (entry) {
    if (key === entry.key) {
      if (previous) {
        previous.next = entry.next;
      }
      else {
        this.head[row] = entry.next;
      }
      row--;
      entry = entry.child;
    }
    else if (key > entry.key) {
      entry = entry.next;
    }
    else {
      // not found
      return;
    }
  }
};

SkipList.prototype.values = function values() {
  var results = [];
  var entry = this.head[0];
  while (entry) {
    results.push(entry.value);
    entry = entry.next;
  }
  return results;
};

SkipList.prototype.print = function print() {
  console.log('\n');
  for (var i = this.head.length - 1; i > -1; i--) {
    var row = 'row ' + i + ': ';
    var entry = this.head[i];
    while (entry) {
      row = row + ' ' + entry.key;
      entry = entry.next;
    }
    console.log(row);
  }
  console.log('\n');
};

module.exports = SkipList;
