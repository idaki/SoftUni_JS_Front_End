function connverToObject(text){
    const obj = JSON.parse(text);
    for (const key in obj) {
        const value = obj[key];
        console.log(`${key}: ${value}`);
    }
}

connverToObject('{"name": "George", "age": 40, "town": "Sofia"}');