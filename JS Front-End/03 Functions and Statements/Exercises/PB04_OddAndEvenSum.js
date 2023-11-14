function calc(num) {
    let arr = num.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (const iterator of arr) {
        if (iterator !== 0) {
            iterator % 2 == 0 ? sumEven += parseInt(iterator) : sumOdd += parseInt(iterator) ;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

calc(1000435);