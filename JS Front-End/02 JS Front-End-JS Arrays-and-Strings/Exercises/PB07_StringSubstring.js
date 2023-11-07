function print(keyStr, targetStr) {
    let regexExp = /,? /;
    let keyStrLowerCase = keyStr.toLowerCase();
    let targetStrLowerCaseArr = targetStr.toLowerCase().split(regexExp);

    for (let element of targetStrLowerCaseArr) {
        if (keyStrLowerCase.localeCompare(element) === 0) {
            console.log(keyStr);
            return;
        }
    }
    console.log(keyStr + ' not found!');
}

print('javascript',
'JavaScript is the best programming language'
);
