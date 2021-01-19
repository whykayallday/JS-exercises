const repeatString = function(string, repeats) {
    let testStr = '';
    if(repeats < 0) {
        return 'ERROR';
    }
    for(let i = 0; i < repeats; i++){
        testStr += string;
    }
    return testStr;
}

module.exports = repeatString
