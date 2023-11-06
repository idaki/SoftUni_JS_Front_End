function censor(str, key){
while(str.includes(key)){
    str.replace(key,'*'.repeat(key.lenght))
}
console.log(str);
}

censor('A small sentence with some words', 'small');