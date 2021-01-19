const sumAll = function(firstNum, lastNum) {
    let sumValue = 0;

    if (!Number.isInteger(firstNum || !Number.isInteger(lastNum))){
        return 'ERROR';
    }
    else if(firstNum <= 0 || lastNum <= 0) {
        return 'ERROR';
    }
    else if(firstNum > lastNum) {
        let buffer = firstNum;
        firstNum = lastNum;
        lastNum = buffer; 
    }
    for(let i = firstNum; i <= lastNum; i++){
        sumValue += i;
    }
    return sumValue;
}

module.exports = sumAll
