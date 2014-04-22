'use strict';

// str2.indexOf(str1) !== -1
module.exports = function stringContains(str1, str2) {
  var str1Index = 0;
  for (var i = 0; i < str2.length; i++) {
    var str2Index = i;
    while (str2[str2Index] === str1[str1Index]) {
      if (str1Index === str1.length - 1) {
        return true;
      }
      str1Index++;
      str2Index++;
    }
    str1Index = 0;
  }
  return false;
};
