function print(a, b, c) {
    let arr = [a, b, c];
    arr.reverse();

    console.log(arr.join(` `).toString());
}

print('A',
    'B',
    'C'
);
