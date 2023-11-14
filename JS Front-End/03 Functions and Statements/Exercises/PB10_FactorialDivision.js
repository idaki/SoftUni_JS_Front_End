function factorialDivision(num1, num2) {
    function calculateFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);

    const result = (factorial1 / factorial2).toFixed(2);

    console.log(result);
}




factorialDivision(5,2)