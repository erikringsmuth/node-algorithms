'use strict';

module.exports = function reverseWordOrder(string) {
  var result = string.split('').reverse();

  var wordStart = 0;
  for (var i = 0; i <= result.length; i++) {
    if (result[i] === ' ' || typeof result[i] === 'undefined') {
      var left = wordStart;
      var right = i - 1;
      while (left < right) {
        var temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        left++;
        right--;
      }
      wordStart = i + 1;
    }
  }

  return result.join('');
};
