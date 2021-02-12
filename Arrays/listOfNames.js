function listOfNames(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a.localeCompare(b));
    let count = 1;

    for (const person of sortedArray) {
        console.log(`${count}.${person}`);
        count++;
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);