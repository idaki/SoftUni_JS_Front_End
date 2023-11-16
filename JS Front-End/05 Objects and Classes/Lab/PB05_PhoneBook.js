function storePersonalDataInObject(array) {
    const phoneBook = {};
    for (const entry of array) {
        const key = entry.split(" ")[0];
        const value = entry.split(" ")[1];
        phoneBook[key] = value;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

storePersonalDataInObject(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
