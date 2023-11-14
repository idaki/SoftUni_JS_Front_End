function print(a, b) {
    let smallerChar = Math.min(a.charCodeAt(), b.charCodeAt());
    let largerChar = Math.max(a.charCodeAt(), b.charCodeAt());
    let result = [];
    for (let currentChar = smallerChar + 1; currentChar < largerChar; currentChar++) {
        result.push(String.fromCharCode(currentChar));
    }
    console.log(result.join(' '));

}

print('a', 'd');