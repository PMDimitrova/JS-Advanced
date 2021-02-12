function sumMN(textNumOne, textNumTwo) {
    let first = Number(textNumOne);
    let second = Number(textNumTwo);

    let sum = 0;

    for (let i = first; i <= second; i++) {
        sum += i;
    }
    console.log(sum);
}
sumMN('-10', '0');