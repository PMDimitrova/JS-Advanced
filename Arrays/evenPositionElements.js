function evenPosElements(array){
    let sum = '';

    for (let i = 0; i < array.length; i+=2){
        sum += array[i] + ' ';
    }
    console.log(sum);
}

evenPosElements(['20', '30', '40', '50', '60']);