'use strict';

function findMin(array) {
  if (array.length === 1) {
    return array[0];
  }
  var middle = Math.floor(array.length / 2);
  return Math.min(findMin(array.slice(0, middle)), findMin(array.slice(middle, array.length)));
}

// iterate through every letter, perform permutations with it added to the prefix plus the permutations of the remaining characters
function permutations(prefix, string, results) {
  if (string.length === 0) {
    results.push(prefix);
    return;
  }
  for (var i = 0; i < string.length; i++) {
    permutations(prefix + string.charAt(i), string.substring(0, i) + string.substring(i + 1, string.length), results);
  }
}

module.exports = {
  findMin: findMin,
  permutations: function(str) {
    var results = [];
    permutations('', str, results);
    return results;
  }
};
