function search() {
   let townsElements = document.getElementsByTagName('li');
   let inputBtn = document.getElementById('searchText').value;
   let matches = 0;

   let towns = Array.from(townsElements);
   for (const town of towns) {
      if (town.textContent.includes(inputBtn)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   let result = document.getElementById('result');
   result.textContent = `${matches} matches found`;

}

