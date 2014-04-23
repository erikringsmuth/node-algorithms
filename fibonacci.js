'use strict';

function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciIterative(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  var a = 0, b = 1, c;
  for (var i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

module.exports = {
  fibonacci: fibonacci,
  fibonacciIterative: fibonacciIterative
};
