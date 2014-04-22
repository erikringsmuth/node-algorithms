'use strict';

function MinimumStack() {
  this.stack = [];
  this.minimums = [];
}

MinimumStack.prototype.push = function push(value) {
  this.stack.push(value);
  if (this.minimums.length === 0 || value <= this.minimums[this.minimums.length - 1]) {
    this.minimums.push(value);
  }
};

MinimumStack.prototype.pop = function pop() {
  var value = this.stack.pop();
  if (value === this.minimums[this.minimums.length - 1]) {
    this.minimums.pop();
  }
  return value;
};

MinimumStack.prototype.minimum = function minimum() {
  return this.minimums[this.minimums.length - 1];
};

module.exports = MinimumStack;
