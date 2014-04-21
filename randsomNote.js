'use strict';

module.exports = function randsomeNote(note, magazine) {
  // can you make a ransom note from the letters in the magazine?

  // count the number of available letters in the magazine and store it in a hash table
  var charCounts = new Array(256),
      hash;
  for (var i = 0; i < charCounts.length; i++) {
    charCounts[i] = 0;
  }
  for (var j = 0; j < magazine.length; j++) {
    hash = magazine.charCodeAt(j);
    charCounts[hash] = charCounts[hash] + 1;
  }

  // now go through the note and subtract the number of uses of each character
  for (var k = 0; k < note.length; k++) {
    hash = note.charCodeAt(k);
    charCounts[hash] = charCounts[hash] - 1;
    if (charCounts[hash] < 0) {
      return false;
    }
  }

  return true;
};
