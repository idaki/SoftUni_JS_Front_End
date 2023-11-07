function pascalSplit(str){
    let regexExp = /[A-Z][a-z]*/gm;
    let wordsArr= str.match(regexExp);
    console.log(wordsArr.join(', '))
}


pascalSplit('SplitMeIfYouCanHaHaYouCantOrYouCan');