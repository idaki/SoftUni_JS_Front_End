function printOddOccurences(inputStr) {
    let arr = inputStr.toLowerCase().split(" ");
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        let keyword = arr[i];
        if (results.includes(keyword)) {
            continue;
        }
        for (j = 0; j < arr.length; j++) {
            let currentWord = arr[j];
            if (keyword === currentWord) {
                counter++;
            }
        }
        if (counter % 2 != 0) {
            results.push(keyword);
        }
    }

    console.log(results.join(' '));

}


printOddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');