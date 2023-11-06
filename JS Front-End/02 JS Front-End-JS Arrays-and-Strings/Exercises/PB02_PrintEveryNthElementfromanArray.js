function print(arr, step){
let resultArr =[];
for (let i=0;i<arr.length; i++){
    if (i==0 || i%step==0 ){
        let currentElement = arr[i]; 
        resultArr.push(currentElement);
    }
}
return resultArr;

}

print(['5', '20',  '31', '4', '20'],2);