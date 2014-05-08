'use strict';

module.exports = function stockMarket(market) {
  var result = {
    buyIndex: 0,
    sellIndex: 0
  };
  var lowest = 0;

  for (var i = 0; i < market.length; i++) {
    if (market[i] < market[lowest]) {
      lowest = i;
    }
    else if (market[i] - market[lowest] > market[result.sellIndex] - market[result.buyIndex]) {
      result.buyIndex = lowest;
      result.sellIndex = i;
    }
  }

  return result;
};
