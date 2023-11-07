function revealWords(wordsInput, senteceInput) {
    let regexExp = /,? /;
    let wordsArr = wordsInput.split(regexExp);
    let sentenceArr = senteceInput.split(regexExp);

    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].includes('*')) {
            for (word of wordsArr) {
                if (sentenceArr[i].length == word.length) {
                    sentenceArr[i] = word;
                    break;
                }
            }
        }
    }
    console.log(sentenceArr.join(' '));

}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');