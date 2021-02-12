function calories(inputArray){
    let output = {};

    for (let i = 0; i <inputArray.length; i +=2){
        output[inputArray[i]] = Number(inputArray[i+1]);
    }
    console.log(output);
}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);