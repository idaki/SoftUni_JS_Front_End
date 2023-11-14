function calc(a, b, operation) {
    let operator = {
        multiply: (a, b) => a * b,
        divide: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
        add: (a, b) => a + b,
        subtract: (a,b)=>a - b
    };

    console.log(operator[operation](a,b));
}

calc(5, 5, 'subtract')