const add = function(a, b) {
  return +a + +b;
	
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(arr) {
	return arr.reduce((first, second) => first + second, 0);
};

const multiply = function(arr) {
  return arr.reduce((left, right) => left * right, 1);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++)
    fact *= i;
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
