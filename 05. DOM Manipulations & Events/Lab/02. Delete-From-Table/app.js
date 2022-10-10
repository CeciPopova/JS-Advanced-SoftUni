function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let tableElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let resultElement = document.getElementById('result');

    let emailElement = Array.from(tableElements);
    let targetElement = emailElement.find(x => x.textContent == emailInputElement.value);
    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
   
}