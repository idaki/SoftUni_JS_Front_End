function reverseSubstring(index, arr) {
    let result = arr.slice(0, index).reverse().join(" ");
                
console.log(result);
}

reverseSubstring(3, [10, 20, 30, 40, 50])