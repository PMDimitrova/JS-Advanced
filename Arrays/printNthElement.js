function printNthElement(inputArray, count) {
    let output = [];

    for (let i = 0; i < inputArray.length; ) {
        output.push(inputArray[i]);
        i +=count;
    }
    return output;
}
printNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);