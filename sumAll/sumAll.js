const sumAll = function(firstNum, lastNum) {
    let sumValue = 0;

    for(let i = firstNum; i <= lastNum; i++){
        sumValue += i;
    }
    return sumValue;
}

module.exports = sumAll
