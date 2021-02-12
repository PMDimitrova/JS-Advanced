function registerHeroes(inputArray){

    let result = [];

    for (const hero of inputArray) {
        // let heroQualities = hero.split(' / ');
        // let heroObject = {
        //     name: heroQualities[0],
        //     level: Number(heroQualities[1]),
        //     items: heroQualities[2].split(', ')
        // }
        let [name, level, itemsString] = hero.split(' / ');
        level = Number(level);
        let items = itemsString ?  itemsString.split(', ') : [];

        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));

    //return JSON representation of an array of all heroes 
}

registerHeroes(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
); 