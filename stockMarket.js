'use strict';

module.exports = function bestDealInStockMarket(market) {
  var deal,
      buyIndex = 0,
      bestDeal = 0;

  for (var i = 0; i < market.length; i++) {
    // keep track of the cheapest price of the stock
    if (market[i] < market[buyIndex]) {
      buyIndex = i;
    }

    // check if today's price minus the previous cheapest price is better than the current best deal
    if (market[i] - market[buyIndex] > bestDeal) {
      deal = {
        buyIndex: buyIndex,
        sellIndex: i
      };
      bestDeal = market[deal.sellIndex] - market[deal.buyIndex];
    }
  }

  return deal;
};
