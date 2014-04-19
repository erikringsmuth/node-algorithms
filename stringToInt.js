'use strict';

module.exports = function stringToInt(string) {
  var num = 0,
      negative = string.charAt(0) === '-';

  for (var i = 0; i < string.length; i++) {
    var decimal = 0;
    switch (string.charAt(i)) {
      case '0':
        decimal = 0;
        break;
      case '1':
        decimal = 1;
        break;
      case '2':
        decimal = 2;
        break;
      case '3':
        decimal = 3;
        break;
      case '4':
        decimal = 4;
        break;
      case '5':
        decimal = 5;
        break;
      case '6':
        decimal = 6;
        break;
      case '7':
        decimal = 7;
        break;
      case '8':
        decimal = 8;
        break;
      case '9':
        decimal = 9;
        break;
    }
    num = num * 10 + decimal;
  }
  if (negative) {
    num = num * -1;
  }
  return num;
};
