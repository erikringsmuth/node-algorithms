'use strict';

function Queue() {
  this.in = [];
  this.out = [];
}

Queue.prototype.add = function add(val) {
  while(this.out.length > 0) {
    this.in.push(this.out.pop());
  }
  this.in.push(val);
};

Queue.prototype.remove = function remove() {
  while(this.in.length > 0) {
    this.out.push(this.in.pop());
  }
  return this.out.pop();
};

module.exports = Queue;
