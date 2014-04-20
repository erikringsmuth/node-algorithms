'use strict';

module.exports = function checkCycle(list) {
  // make a slow iterator that steps 1 node at a time
  var slow = list;

  // make a fast iterator that steps 2 nodes at a time
  var fast = slow.next;

  // if the fast iterator ever equals the slow iterator then there
  // was a loop and it caught up
  while (typeof fast !== 'undefined') {
    if (fast === slow) {
      // there is a cycle
      return true;
    }
    slow = slow.next;
    fast = fast.next;
    if (typeof fast !== 'undefined') {
      // move twice as fast as slow
      fast = fast.next;
    }
  }

  // made it to the end, no cycle found
  return false;
};
