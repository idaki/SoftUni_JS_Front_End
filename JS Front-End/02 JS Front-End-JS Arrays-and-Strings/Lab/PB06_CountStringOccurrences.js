function count(str, key){
    let arr= str.split(" ");
    let count = 0;
    for (let element of arr ){
        if (element == key){
            count++;
        }
    }
    console.log(count);

}

count('This is a word and it also is a sentence',
'is')