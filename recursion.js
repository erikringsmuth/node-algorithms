'use strict';

function findMin(array) {
  if (array.length === 1) {
    return array[0];
  }
  var middle = Math.floor(array.length / 2);
  return Math.min(findMin(array.slice(0, middle)), findMin(array.slice(middle, array.length)));
}

module.exports = {
  findMin: findMin
};
