function calc(a,b,c){
    let sum = (a,b)=>a+b;
    let subtract = (sum, c)=>sum-c;
    console.log(subtract(sum(a,b),c));
}

calc(23, 6, 10)