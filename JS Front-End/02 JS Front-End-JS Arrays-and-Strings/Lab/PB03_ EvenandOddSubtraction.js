
function calc(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (const element of arr) {
        
     
        if(element % 2 === 0){
            sumEven+=element;
        }else{
            sumOdd+=element;
        }
    }
console.log(sumEven-sumOdd);

}
calc([1, 2, 3, 4, 5, 6]);