'use strict';

var assert        = require('assert'),
    hashFunctions = require('../hashFunctions');

describe('charCodeHash()', function() {
  it('should sum the char codes', function() {
    // arrange
    var str = 'hi';

    // act
    var hash = hashFunctions.charCodeHash(str);

    // assert
    assert.equal(hash, 209);
  });
});

describe('charCodeHash2()', function() {
  it('should combine 2 characters and sum their char codes', function() {
    // arrange
    var str = 'hi';

    // act
    var hash = hashFunctions.charCodeHash2(str);

    // assert
    assert.equal(hash, 209);
  });

  it('should combine 2 characters and sum their char codes again', function() {
    // arrange
    var str = 'hi2';

    // act
    var hash = hashFunctions.charCodeHash2(str);

    // assert
    assert.equal(hash, 209);
  });
});

describe('charCodeHash3()', function() {
  it('should combine 2 characters and sum their char codes after multiplying by a prime', function() {
    // arrange
    var str = 'hi';

    // act
    var hash = hashFunctions.charCodeHash3(str);

    // assert
    assert.equal(hash, 2093);
  });
});
