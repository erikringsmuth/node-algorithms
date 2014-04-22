'use strict';

function flipCoin() {
  return Math.floor(Math.random() * 2);
}

module.exports = {
  // use each coin flip as a bit, if it's 0 or 7 discard it and roll again
  roll: function roll() {
    var num = 0;
    while(num === 0 || num === 7) {
      num = flipCoin() | 2 * flipCoin() | 4 * flipCoin();
    }
    return num;
  }
};
