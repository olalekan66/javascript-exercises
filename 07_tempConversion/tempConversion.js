const convertToCelsius = function(fahrenheit) {
  return parseFloat(((fahrenheit - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(celcius) {
    return parseFloat(((celcius * 9/5) + 32).toFixed(1));
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
