function print(arrInput) {
    let cities = [];
    arrInput.forEach(e => {

        let city = {
            town: e.split(' | ')[0],
            latitude: parseFloat(e.split(' | ')[1]).toFixed(2),
            longitude: parseFloat(e.split(' | ')[2]).toFixed(2),
        };
        cities.push(city);
    });

    cities.forEach(c => {
        console.log(c);
    });
}


print(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);