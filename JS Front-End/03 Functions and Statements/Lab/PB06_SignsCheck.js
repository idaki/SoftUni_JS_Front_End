function checkSign(a, b, c) {
    let count = 0;
    if (a < 0) {
        count++;
    }
    if (b < 0) {
        count++;
    }
    if (c < 0) {
        count++;
    }
    let result = '';
    if (count === 0 || count === 2) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);

}

checkSign(5, 12, -15)