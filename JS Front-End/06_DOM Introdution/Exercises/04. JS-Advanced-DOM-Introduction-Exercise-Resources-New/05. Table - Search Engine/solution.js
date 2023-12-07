function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      const searchPattern = document.getElementById("searchField").value.toLowerCase(); // Convert search pattern to lowercase for case-insensitive search
      const rows = Array.from(document.querySelectorAll("tbody tr"));
  
      rows.forEach(row => row.classList.remove("select"));
  
      rows.forEach(row => {
          const cells = Array.from(row.querySelectorAll("td"));
          const foundInRow = cells.some(cell => cell.textContent.toLowerCase().includes(searchPattern));
          if (foundInRow) {
              row.classList.add("select");
          }
      });
   }
}