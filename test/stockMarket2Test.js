'use strict';

var assert      = require('assert'),
    stockMarket = require('../stockMarket2');

describe('bestDealInStockMarket()', function() {
  it('should find the best day to buy and sell in the stock market', function() {
    // arrange
    var market = [100, 98, 97, 89, 110, 190, 90, 240, 230, 200, 190];

    // act
    var actual = stockMarket(market);

    // assert
    assert.deepEqual(actual, { buyIndex: 3, sellIndex: 7 });
  });
});
