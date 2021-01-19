const removeFromArray = function(arrayInput, ...element) {
    let modifiedArray = [];
    

    for(let i = 0; i < arrayInput.length; i++) {
        let matchFound = false;
        
        for(let j = 0; j < element.length; j++) {
            if(arrayInput[i] === element[j]) {
                matchFound = true;
                break;
            }
        }
        if(matchFound == true) {
            continue;
        }
        else {
            modifiedArray.push(arrayInput[i]);
        }
    }
    return modifiedArray;
}

module.exports = removeFromArray
 