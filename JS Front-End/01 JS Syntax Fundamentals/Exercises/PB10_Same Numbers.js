function validate(num) {
    let isValid = true;
    let arr = num.toString().split('').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[0] !== arr[i]) {
            isValid = false;
            break;
        }
    }
    for (let digit of arr) {
        sum += digit;
    }
    
    console.log(isValid);
    console.log(sum);
}

validate(2222222);