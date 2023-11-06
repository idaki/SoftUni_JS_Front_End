function sortArray(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];

    for (let i = 0, j = sortedArr.length - 1; i <= j; i++, j--) {
        if (i === j) {
            
            result.push(sortedArr[i]);
        } else {
          
            result.push(sortedArr[i]);
            result.push(sortedArr[j]);
        }
    }

    return result;
}




sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);