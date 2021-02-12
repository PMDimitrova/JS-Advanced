function solveMe(inputNum){
    let areEqual = true;
    let previousDigit = (inputNum %10);
    let num = inputNum;
    let sumOfDigits = 0;
    
    while (num > 0){
        currentDigit = num % 10;
        if (!(previousDigit == currentDigit )){
            areEqual = false;
        } 
        sumOfDigits += currentDigit;
        num = Math.floor(num /10);
        previousDigit =  currentDigit;
    }
    console.log(areEqual);
    console.log(sumOfDigits);
}
solveMe(1234);