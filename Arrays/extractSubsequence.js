function  extractSubs(inputArray){
    let output = [];
    let currentBiggest =  Number.MIN_SAFE_INTEGER;

    for (const num of inputArray) {
        if(num>currentBiggest){
            output.push(num);
            currentBiggest = num;
        }
    }

    return output;
}
extractSubs([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );