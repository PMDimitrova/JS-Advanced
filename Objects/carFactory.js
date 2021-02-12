function assemble(inputObj) {
    let engineLibrary = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    };

    let carriageLibrary = {
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' }
    }


    let outputObj = {};
    outputObj.model = inputObj.model;
    if (inputObj.power <= 90) {
        outputObj.engine = engineLibrary.smallEngine;
    } else if (inputObj.power <= 120) {
        outputObj.engine = engineLibrary.normalEngine;
    } else {
        outputObj.engine = engineLibrary.monsterEngine;
    }

    outputObj.carriage = carriageLibrary[inputObj.carriage];
    outputObj.carriage.color = inputObj.color;

    let wheelSizeCorrected = inputObj.wheelsize;


    if (!(inputObj.wheelsize % 2 == 1)) {
        let wheelSizeCorrected = Math.floor(inputObj.wheelsize);
        if (wheelSizeCorrected % 2 ==0){
            wheelSizeCorrected -=1;
        }
    }
    let wheels = [0, 0, 0, 0];
    wheels.fill(wheelSizeCorrected, 0, 4);
    outputObj.wheels = wheels;
    return(outputObj);
}
assemble({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

);