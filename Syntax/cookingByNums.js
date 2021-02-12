function solveMe(inputNum, first, second, third, fourth, fifth) {
    let num = inputNum;
    let operations = [first, second, third, fourth, fifth];

    for (let i = 0; i < 5; i++) {
        switch (operations[i]){
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num = num /10 * 8; break;
        }
        console.log(num);
    }


    }
    solveMe('9', 'dice', 'spice', 'chop', 'bake', 'fillet');