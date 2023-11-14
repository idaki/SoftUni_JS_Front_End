function validatePalindrome(arr) {
    for (let element of arr) {
        let isPalindrome = true;
        let numArr = element.toString();
        
        for (let i = 0; i < numArr.length / 2; i++) {
            if (numArr[i] !== numArr[numArr.length - 1 - i]) {
                isPalindrome = false;
            }
        }
        
        console.log(isPalindrome);
    }
}

validatePalindrome([123, 323, 421, 121]);

