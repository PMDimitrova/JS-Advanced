function biggestElement(inputMatrix) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < inputMatrix.length; row++) {
        for (let col = 0; col < inputMatrix[0].length; col++) {
            if(inputMatrix[row][col] > maxNum){
                maxNum = inputMatrix[row][col];
            }
        }
    }
    return(maxNum);
}
biggestElement([[20, 50, 10],
[8, 33, 145]]
);