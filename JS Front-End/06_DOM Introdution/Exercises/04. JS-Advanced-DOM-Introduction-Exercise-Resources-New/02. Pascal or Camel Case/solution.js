function solve() {
  let textInput = document.getElementById('text').value.toLowerCase();
  let conventionType = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let textArr = Array.from(textInput.split(' '));

  if (conventionType === 'Camel Case') {
    for (let i = 1; i < textArr.length; i++) {
      let firstChar = textArr[i].charAt(0).toUpperCase();
      textArr[i] = firstChar + textArr[i].slice(1);
    }
  } else if (conventionType === 'Pascal Case') {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
    }
  } else {
    result.innerText = 'Error!';
    return;
  }

  result.innerText = textArr.join('');
}
