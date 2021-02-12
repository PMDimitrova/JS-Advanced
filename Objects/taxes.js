function taxes(name, population, treasury) {
    let output = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population *= (100 + percentage) / 100;
            this.population = Math.floor(this.population);
        },
        applyRecession(percentage) {
            this.treasury *= (100 - percentage) / 100;
            this.treasury = Math.ceil(this.treasury);
        }
    };
    output.collectTaxes();
    console.log(output.treasury);
    output.applyGrowth(5);

    console.log(output.population);
    return output;
}

taxes('Tortuga',
    7000,
    15000
);