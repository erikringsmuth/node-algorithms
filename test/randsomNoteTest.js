'use strict';

var assert      = require('assert'),
    randsomNote = require('../randsomNote');

describe('randsomNote()', function() {
  it('should return true if it can make the randsom note', function() {
    // arrange
    var note = 'sos help!';
    var magazine = 'supposedly over a period of time everything will work out!';

    // act
    var actual = randsomNote(note, magazine);

    // assert
    assert.equal(actual, true);
  });

  it('should return false if it can\'t make the randsom note', function() {
    // arrange
    var note = 'no scheme';
    var magazine = 'programming interviews are weird';

    // act
    var actual = randsomNote(note, magazine);

    // assert
    assert.equal(actual, false);
  });
});
