function solve(input) {
    const baristaNumber = parseInt(input[0]);
    let baristasList = [];

    
    for (let i = 1; i <= baristaNumber; i++) {
        const [name, shift, coffeeTypeStr] = input[i].split(' '); 
        const coffeeTypeArr = coffeeTypeStr.split(',');

        baristasList.push({
            name: name,
            shift: shift,
            coffeeTypes: coffeeTypeArr
        });
    }

    
    function findBarista(name) {
        return baristasList.find(barista => barista.name === name);
    }

   
    for (let i = baristaNumber + 1; i < input.length; i++) {
        const [command, baristaName, token1, token2] = input[i].split(' / ');
        const barista = findBarista(baristaName);

        if (command === 'Prepare') {
            const shift = token1;
            const coffeeType = token2;

            if (barista && barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }
        } else if (command === 'Change Shift') {
            const newShift = token1;

            if (barista) {
                barista.shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
            }
        } else if (command === 'Learn') {
            const newCoffeeType = token1;

            if (barista && !barista.coffeeTypes.includes(newCoffeeType)) {
                barista.coffeeTypes.push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            } else {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            }
        } else if (command === 'Closed') {
            break;
        }
    }


    for (const barista of baristasList) {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypes.join(', ')}`);
    }
}

    solve(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
     'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
    
    );