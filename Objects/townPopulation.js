function population(inputArray) {
    let outputArrayTowns = {};
    for (let townInfo of inputArray) {
        // let [name, populationOfTown] = townInfo.split(' <-> ');
        let tokens = townInfo.split(' <-> ');
        let currentName = tokens[0];
        let population  = Number(tokens[1]);
        
        if(outputArrayTowns[currentName] == undefined){
           outputArrayTowns[currentName] = population; 
        }else{
            outputArrayTowns[currentName] += population;
        }
    }
    for (let currentName in outputArrayTowns) {
        console.log(`${currentName} : ${outputArrayTowns[currentName]}`);
    }
}
population(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);