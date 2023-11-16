function print(obj){
    for (const key in obj) {
        const value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}

print({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    });