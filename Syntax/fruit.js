function solveMe(fruitName, weight, price){
    let moneyNeeded = (price * (weight/1000)).toFixed(2);
    console.log(`I need $${moneyNeeded} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitName}.`);

}
solveMe('apple', 1563, 2.35);