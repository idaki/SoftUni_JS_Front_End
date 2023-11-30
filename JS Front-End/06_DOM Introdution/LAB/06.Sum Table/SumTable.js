function sumTable() {
    let table = document.querySelectorAll('table tr');
    let result = 0;
    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        let cost = cols[1].textContent;
        result += Number(cost);
    }
    document.getElementById('sum').textContent = result;

}