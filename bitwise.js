'use strict';

function twoPowX(pow) {
  return 1 << pow;
}

function powOfTwo(num) {
  return (num & num - 1) === 0;
}

module.exports = {
  twoPowX: twoPowX,
  powOfTwo: powOfTwo
};
