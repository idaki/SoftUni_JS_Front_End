function create(words) {
   let mainDiv = document.querySelector('#content');

   for (const word of words) {
      let currentDiv= document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.style.display='none';
      paragraph.innerText= word;
    
      currentDiv.appendChild(paragraph);
      mainDiv.appendChild(currentDiv);

      currentDiv.addEventListener('click', function () {
         showText(paragraph);
       });
   }

   function showText(paragraph){
      paragraph.style.display='block';

   }

}