function calcPrice(item, quntity) {
    const operation = {
        coffee: (quantity) => 1.50 * quantity,
        water: (quantity) => 1.00 * quantity,
        coke: (quantity) => 1.40 * quantity,
        snacks: (quantity) => 2.00 * quantity
    };

    console.log(operation[item](quntity).toFixed(2))

}

calcPrice("water", 5);