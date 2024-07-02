const convertToCelsius = function(fTemp) {
  let conversion = (fTemp - 32) * (5/9);
  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  let second_conversion = (cTemp * (9/5)) + 32;
  return Math.round(second_conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
