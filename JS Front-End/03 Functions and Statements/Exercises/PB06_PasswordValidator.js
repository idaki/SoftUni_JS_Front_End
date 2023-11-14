function validatePassword(password) {
    let regexExp = /[A-Za-z0-9]+/;
    let regexExpDig = /\d/gm;
    let isValidLength = password.length >= 6 && password.length <= 10;
    let isAlphanumeric = password.match(regexExp) !== null ;
    let arrDigitis = password.match(regexExpDig);
    let hasMin2Numbers = false;
    if (arrDigitis!=null && arrDigitis.length >= 2) {
        hasMin2Numbers = true;
    }




    if (!isValidLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isAlphanumeric) {
        console.log('Password must consist only of letters and digits');
    }
    if (!hasMin2Numbers) {
        console.log('Password must have at least 2 digits');
    }

    if (isValidLength && isAlphanumeric && hasMin2Numbers) {
        console.log('Password is valid');
    }
}

validatePassword('Pa$s$s');