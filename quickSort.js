'use strict';

module.exports = {
  quickSort: function(array) {
    return Array.prototype.sort.call(array, function(a, b) { return a - b; });
  }
};
