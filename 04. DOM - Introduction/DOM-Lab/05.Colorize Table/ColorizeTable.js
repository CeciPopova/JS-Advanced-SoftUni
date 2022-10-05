function colorize() {
//    let rowsElements = document.querySelectorAll('tr:nth-of-type(2n) td');

//    rowsElements.forEach(x=> {
//     x.style.backgroundColor = 'teal';
//    });

      let rowsElements = document.getElementsByTagName('tr');
      let rows = Array.from(rowsElements);
      rows.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }

      });

}