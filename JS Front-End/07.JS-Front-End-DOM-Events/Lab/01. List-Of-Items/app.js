function addItem() {
    const targetElement = document.getElementById('items');
    const text = document.querySelector('input[type="text"]').value;
                
    
    const newElement = document.createElement('li');
  
    newElement.innerHTML = text;

    targetElement.appendChild(newElement);

}