function print(str) {
    let regexExp = /#[A-Za-z]+/mg;
    let result = str.match(regexExp);
    for (element of result) {
        console.log(element.slice(1));
    }
}

print('Nowadays everyone uses # to tag a #special word in #socialMedia');