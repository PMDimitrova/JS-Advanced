function findLowestPrice(input) {
    let output = {};
    for (const infoData of input) {
        let [town, productName, price] = infoData.split(' | ');
        price = Number(price);
        

        if (!output[productName]) {
            output[productName] = { price, town };
        } else if (output[productName].price > price) {
            output[productName].price = price;
            output[productName].town = town;
        }
    }

    for (const entry in output) {
        console.log(`${entry} -> ${output[entry].price} (${output[entry].town})`);
    }

}

findLowestPrice(['Sofia City | Audi | 100000', 
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);