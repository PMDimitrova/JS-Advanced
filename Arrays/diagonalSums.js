function diagonalSums(inputMatrix) {
    let primaryDiagonalSum = 0;
    for( let i = 0; i<inputMatrix.length; i++){
        primaryDiagonalSum+= inputMatrix[i][i];
    }

    let secondaryDiagonalSum = 0;
    let col = 0;
    for (let row = inputMatrix.length - 1; row>=0; row--){
        secondaryDiagonalSum += inputMatrix[row][col];
        col++;
    }
    console.log(primaryDiagonalSum + ' ' + secondaryDiagonalSum);
}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);   