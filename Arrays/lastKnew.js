function lastKNums(n, k){
    let output = [];
    output.push(1);

    for(let i = 1; i< n; i++){
        let numToAdd = 0;
        for (let j = i; j >= (i - k); j--){
            if (!(isNaN (output[j]))){
                numToAdd += output[j];
            }
        }
        output.push(numToAdd);
    }
    
    return output;
}

// lastKNums(6, 3);
// lastKNums(8, 2);
lastKNums(9,5);