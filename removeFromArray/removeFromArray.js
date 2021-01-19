const removeFromArray = function(arrayInput, ...element) {
    let modifiedArray = [];

    for(let i = 0; i < arrayInput.length; i++) {
        if(arrayInput[i] == element) {
            continue;
        }
        else {
            modifiedArray.push(arrayInput[i]);
        }
    }
    return modifiedArray;
}

module.exports = removeFromArray
 