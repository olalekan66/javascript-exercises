const convertToCelsius = function(x) {
  const degreeInCelcius = (x - 32) * 5/9;
  const round = parseFloat(degreeInCelcius.toFixed(1));
  return round;
};

const convertToFahrenheit = function(tempCel) {
    const degreeInFahrenheit = (tempCel * 9/5) + 32;
    const rounded = parseFloat(degreeInFahrenheit.toFixed(1));
    return rounded;
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
