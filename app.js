function extractValue (arr, key){
    return arr.reduce(function(accumulator, currentVal){
       accumulator.push(currentVal[key]);
       return accumulator;
    }, []);
}

function vowelCount (str){
    const lowerCaseStr = str.toLowerCase();
    const strArr=lowerCaseStr.split('');
    const vowels= ['a','e','i','o','u'];
    const count = 
    strArr.filter(function(letter){
        return vowels.indexOf(letter) !== -1;
    })
    .reduce(function(acc, currentVal){
        if (acc[currentVal] == null){
            acc[currentVal] = 1;
        } else {
            acc[currentVal] += 1;
        }
       return acc;
    }, {});
    return count;
}

function addKeyAndValue(arr, key, value){
   return arr.reduce(function(acc, currentVal, idx){
        acc[idx][key] = value;
        return acc;
    }, arr)
}

function partition (arr, callback){
    return arr.reduce(function (acc, currentVal){
        if (callback(currentVal) === true){
            acc[0].push(currentVal);
        } else {
            acc[1].push(currentVal);
        }
        return acc;
    }, [[],[]])
}