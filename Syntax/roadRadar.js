function solveMe(speed, area) {
    let allowedSpeed = 0;
    switch (area) {
        case 'motorway': allowedSpeed = 130; break;
        case 'interstate': allowedSpeed = 90; break;
        case 'city': allowedSpeed = 50; break;
        case 'residential': allowedSpeed = 20; break;
    }

    let overSpeed = speed - allowedSpeed;
    if (overSpeed <= 0) {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
    } else {
        let speeding = '';
        if (overSpeed <= 20) {
            speeding = 'speeding';
        } else if (overSpeed <= 40) {
            speeding = 'excessive speeding';

        } else {
            speeding = 'reckless driving';
        }

        let output = `The speed is ${overSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${speeding}`;
        console.log(output);
    }

}

solveMe(21, 'residential');
solveMe(120, 'interstate');