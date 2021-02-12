function solveMe(inputArray){
    let output = inputArray.sort((a, b) => a - b);
    console.log(output[0] + ' ' + output[1]);
}
solveMe ([30, 15, 50, 5]);