function equalNeighbors(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            let currentElement = matrix[row][col];

            let leftElement = matrix[row - 1][col];
            if (currentElement == leftElement) {
                count++;
            }

            if (row !== 0) {
                let upperElement = matrix[row][col - 1];
                if (currentElement == upperElement) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
equalNeighbors([2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
);