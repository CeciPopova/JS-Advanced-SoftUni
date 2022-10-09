function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of rows) {
         row.classList.remove('select');
         if (row.innerHTML.includes(input.value) && input.value !== '') {
            row.className = 'select';
         }
      }
      input.value = '';
   }
}