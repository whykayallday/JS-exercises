const ftoc = function(inputTempF) {
  let tempConversion = (inputTempF - 32) / 1.8;

  tempConversion = roundToFixed(tempConversion);

  return Number(tempConversion);
}


const ctof = function(inputTempC) {
  let tempConversion = (inputTempC * 1.8) + 32;

  tempConversion = roundToFixed(tempConversion);

  return Number(tempConversion);
}


function roundToFixed(inputNum) {
  let fixedNum = (inputNum * 10) / 10;

  return fixedNum.toFixed(1);
}


module.exports = {
  ftoc,
  ctof
}
