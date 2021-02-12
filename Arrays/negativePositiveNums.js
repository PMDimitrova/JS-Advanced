function negativePositive(inputArray) {
    let output = [];
    for (const num of inputArray) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }
    for (const num of output) {
        console.log(num);
    }
}

negativePositive([7, -2, 8, 9]);