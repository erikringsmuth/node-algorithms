'use strict';

function permutations(string, permutation, results) {
  if (string.length === 0) {
    results.push(permutation);
    return;
  }
  for (var i = 0; i < string.length; i++) {
    permutations(string.substring(0, i) + string.substring(i + 1, string.length), permutation + string.charAt(i), results);
  }
  return results;
}

module.exports = function (string) {
  var results = [];
  permutations(string, '', results);
  return results;
};
