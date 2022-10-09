function search() {
   let elementsToSearch = Array.from(document.querySelectorAll('#towns li'));
   let textToSearch = document.querySelector('#searchText').value;
   let count = 0;

   for (const el of elementsToSearch) {
      if (el.textContent.includes(textToSearch) && textToSearch !== '') {
         el.style.fontWeight='bold';
         el.style.textDecoration = 'underline';
         count++;
      } else {
         el.style.fontWeight='normal';
         el.style.textDecoration = 'none';
      }
   }
   let maches = document.getElementById('result');
   maches.textContent = `${count} matches found`;


}
