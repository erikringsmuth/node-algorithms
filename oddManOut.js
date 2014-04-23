'use strict';

// also see xorTest

module.exports = function oddManOut(array) {
  // loop through the array, add each item to a set, if it
  // doesn't exist in the set add it to the sum, otherwise
  // delete it from the set and subtract it from the sum
  var sum = 0,
      set = {};

  for (var i = 0; i < array.length; i++) {
    var val = array[i];
    if (set.hasOwnProperty(val)) {
      sum -= val;
    }
    else {
      set[val] = val;
      sum += val;
    }
  }
  return sum;
};
