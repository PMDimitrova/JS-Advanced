function addAndRemove(inputArray){
    let output = [];

    let num = 1;
    
    for (const command of inputArray) {

        if(command == 'add'){
            output.push(num);
        }else{
            output.pop(num);
        }
        num++;
    }

    if(output.length>0){
        console.log(output.join('\n'));
    }else{
        console.log('Empty');
    }
}
addAndRemove(['add', 
'add', 
'add', 
'add']
);