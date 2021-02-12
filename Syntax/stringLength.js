function stringLength(firstText, secondText, thirdText) {
    let sumOfLengths = firstText.length + secondText.length + thirdText.length;
    console.log(sumOfLengths);
    console.log(Math.floor(sumOfLengths / 3));
}
stringLength('chocolate', 'ice cream', 'cake');