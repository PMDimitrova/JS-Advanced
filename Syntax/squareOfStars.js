function square(input){
    let count = -1;

    if(isNumber(input) ){
        count = input;
    }else{
        count = 5;
    }

    for (let i = 0; i< count; i++){
        let char = '* ';
        let row = char.repeat(count);
        console.log(row);

    }



    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
}

square();
square(3);