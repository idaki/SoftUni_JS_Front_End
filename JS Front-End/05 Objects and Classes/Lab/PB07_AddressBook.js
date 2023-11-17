function print(arr) {
    const list = {};

    for (const element of arr) {
        const name = element.split(":")[0];
        const street = element.split(":")[1];
        list[name] = street;
    }

    // Sort the list by keys (names)
    const sortedList = Object
    .fromEntries(Object
        .entries(list)
        .sort((a, b) => a[0]
        .localeCompare(b[0])));

    for (const key in sortedList) {
        console.log(`${key} -> ${sortedList[key]}`);
    }
}


print(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'John:Grover Rd']

);