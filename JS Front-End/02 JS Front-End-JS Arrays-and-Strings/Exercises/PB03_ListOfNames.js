function print(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b));
    let index = 1;
    for(let element of arr){
        console.log(`${index++}.`+element);
    }
}


print(["John", "Bob", "Christina", "Ema"]);