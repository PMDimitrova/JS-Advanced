function biggerHalf(inputArray){
    let sortedArray = inputArray.sort((a, b) => a-b);
    let size = Math.floor(sortedArray.length/2);
    let outputArray = sortedArray.slice(size);
    return outputArray;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);