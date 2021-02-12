function record(name, population, treasury) {
    let output = {};

    output.name = name;
    output.population = population;
    output.treasury = treasury;

    return output;
}

record('Tortuga',
    7000,
    15000
);