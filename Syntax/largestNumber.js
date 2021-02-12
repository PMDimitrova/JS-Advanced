function largestNumber(one, two, three){
    let maxNum = Number.MIN_SAFE_INTEGER;
    if (one> maxNum){
        maxNum = one;
    }
    if( two > maxNum){
        maxNum = two;
    
    }
    if (three> maxNum){
        maxNum = three;
    }
    console.log(`The largest number is ${maxNum}.`);
}
largestNumber(5, -3, 16);