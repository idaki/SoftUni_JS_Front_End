

function countOccurrences(inputArr) {

    let targetKeywordArr = inputArr[0].split(' ');
    let results = [];
    for (const keyword of targetKeywordArr) {
        let counter = 0;
        let result = {};
        for (let i = 1; i < inputArr.length; i++) {
            if (keyword === inputArr[i]) {
                counter++;
            }
        }
        result.keyword = keyword;
        result.count = counter;
        results.push(result);
    }

    results.sort((a,b)=> b.count-a.count );
    results.forEach(r => console.log(`${r.keyword} - ${r.count}`));

}

countOccurrences([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);

