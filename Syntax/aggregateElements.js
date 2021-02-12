function aggregate(arrayInput) {
    let sum = 0;
    arrayInput.forEach(num => {
        sum += num;
    });

    let inverseValSum = 0;

    arrayInput.forEach(num => {
        inverseValSum += 1 / num;
    });

    let stringOutput = '';

    arrayInput.forEach(num => {
        stringOutput += num;
    });

    console.log(sum);
    console.log(inverseValSum);
    console.log(stringOutput);
}
aggregate([1, 2, 3]);
aggregate(
    [2, 4, 8, 16]
);