function rotateElements(inputArray, count){
    let output = inputArray;
    for(let i = 0; i<count; i++){
        let element = output.pop();
        output.unshift(element);
    }

    console.log(output.join(' '));
}

rotateElements(['1', 
'2', 
'3', 
'4'], 
2
);