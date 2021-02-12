function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value.toLowerCase();
      let rows = document.querySelectorAll('tbody tr');

      for (let row of rows) {
         if (row.textContent.toLowerCase().includes(searchText)){
            row.classList.add('select');
         }else{
            row.removeAttribute('class');
         }
      }
   }
}