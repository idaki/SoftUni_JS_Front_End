function calc(input){
let inputStr = input.toString(); 
let inputArr= inputStr.split('');
let numArr= inputArr.map(Number);
let result = 0;
for(let i =0; i<numArr.length; i++){
result+=numArr[i];
}

console.log(result);
}

calc(543);