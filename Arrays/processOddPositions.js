function doubleReverse(inputArray){

    let output = [];

    for (let i = 1; i < inputArray.length; i++){
        output.unshift((inputArray[i])*2);
        i++;
    }
    return(output.join(' '));
}

doubleReverse ([10, 15, 20, 25]);