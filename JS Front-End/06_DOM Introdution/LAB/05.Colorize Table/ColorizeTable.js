function colorize() {
    let tElements = document.querySelectorAll('tr');
    let count = 1;

    for (const row of tElements) {
        if (count % 2 === 0) {
            for (const cell of row.cells) {
                cell.style.backgroundColor = 'teal';
            }
        }
        count++;
    }
}