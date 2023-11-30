function extractText() {
    // TODO
    let elements = document.getElementsByTagName('li');
    let textArea = document.getElementById('result');

    for (let i = 0; i < elements.length; i++) {
        textArea.value += elements[i].textContent + '\n';
    }
}

