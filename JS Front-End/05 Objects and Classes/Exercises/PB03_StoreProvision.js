function print(stockArr, orderArr){
const stockMap= new Map();
for(let i = 0; i<stockArr.length;i+=2){
    stockMap.set(stockArr[i],parseInt(stockArr[i+1]));
}


for (let i = 0; i < orderArr.length; i += 2) {
    if (stockMap.has(orderArr[i])) {
        const currentQty = stockMap.get(orderArr[i]);
        stockMap.set(orderArr[i], currentQty + parseInt(orderArr[i + 1]));
    } else {
        stockMap.set(orderArr[i], parseInt(orderArr[i + 1]));
    }
}

stockMap.forEach((value,key)=>{
    console.log(`${key} -> ${value}`)
});


}

print([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );