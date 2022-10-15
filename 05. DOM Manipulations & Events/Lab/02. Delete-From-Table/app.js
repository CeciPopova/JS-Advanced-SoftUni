function deleteByEmail() {
    // let emailInputElement = document.querySelector('input[name="email"]');
    // let tableElements = document.querySelectorAll('tr td:nth-of-type(2)');
    // let resultElement = document.getElementById('result');
    // let emailElement = Array.from(tableElements);
    // let targetElement = emailElement.find(x => x.textContent == emailInputElement.value);

    // if (targetElement) {
    //     targetElement.parentNode.remove();
    //     resultElement.textContent = 'Deleted.';
    // } else {
    //     resultElement.textContent = 'Not found.';
    // }

   let infoElements = Array.from(document.querySelectorAll('tr td'));
   let inputElement = document.querySelector('input[name="email"]');
   let result = document.getElementById('result');
   for (i = 0 ; i < infoElements.length ; i++) {
    if (infoElements[i].textContent == inputElement.value) {
        infoElements[i].parentNode.remove();
        result.textContent = 'Deleted.'
       
    }else{
        result.textContent = 'Not found.';
    }
   }
}