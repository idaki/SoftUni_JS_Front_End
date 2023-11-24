function printCars(inputArr){
    let garage = [];
   
inputArr.forEach(element => {
    let operator = element.split(", ")[0];
    let car = element.split(", ")[1];

    if (!garage.includes(car) && operator==='IN'){
        garage.push(car);
    }else if(garage.includes(car) && operator==='OUT'){
        const index = garage.indexOf(car);
        const x = garage.splice(index, 1);
    } 
});

if (garage.length===0){
    console.log('Parking Lot is Empty');
} else{
    garage.sort((a, b) => a.localeCompare(b));
    garage.forEach(c=>console.log(c));
}

} 

printCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);