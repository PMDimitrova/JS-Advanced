function solveMe(firstNum, secondNum) {
    let divisor = (firstNum < secondNum) ? firstNum : secondNum;
    let isBiggestNum = false;

    while (!isBiggestNum) {
        if (firstNum % divisor == 0 && secondNum % divisor == 0) {
            isBiggestNum = true;
        }else{
            divisor--;
        }
    }
    console.log(divisor);
}
solveMe(2154, 458);