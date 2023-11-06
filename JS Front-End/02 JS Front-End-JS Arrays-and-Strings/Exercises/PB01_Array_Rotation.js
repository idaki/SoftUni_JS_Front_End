function rotate (arr,count){

    for(let i = 0; i<count;i++){
        let firstElement= arr.shift(); 
        arr.push(firstElement)
    }
    console.log(arr.join(" "));
} 

rotate([51, 47, 32, 61, 21], 2);