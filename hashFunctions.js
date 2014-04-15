'use strict';

function charCodeHash(string) {
  if (typeof string !== 'string') {
    throw 'Not a string';
  }
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash = hash + string.charCodeAt(i);
  }
  return hash;
}

function charCodeHash2(string) {
  if (typeof string !== 'string') {
    throw 'Not a string';
  }
  var hash = 0;
  for (var i = 2; i <= string.length; i = i + 2) {
    hash = hash + string.charCodeAt(i - 2) + string.charCodeAt(i - 1);
  }
  return hash;
}

function charCodeHash3(string) {
  if (typeof string !== 'string') {
    throw 'Not a string';
  }
  var hash = 0;
  for (var i = 2; i <= string.length; i = i + 2) {
    hash = hash + string.charCodeAt(i - 2) * 7 + string.charCodeAt(i - 1) * 13;
  }
  return hash;
}

module.exports = {
  charCodeHash: charCodeHash,
  charCodeHash2: charCodeHash2,
  charCodeHash3: charCodeHash3
};
