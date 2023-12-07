function search() {
   // TODO

   let liArray = document.querySelectorAll('#towns li');
   let searchText = document.getElementById('searchText').value;
   let count = 0;
   let result = document.getElementById('result');

   
   for (const li of liArray) {
      li.style.textDecoration = 'none';
      li.style.fontWeight = 'normal';
   }


   for (const li of liArray) {
      let liText = li.textContent;
      if (liText.includes(searchText)) {
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         count++;
      }
   }

   result.innerText = `${count} match${count === 1 ? '' : 'es'} found.`;


}
