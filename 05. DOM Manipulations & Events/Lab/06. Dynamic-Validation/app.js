function validate() {
    let inputElement = document.getElementById('email');
    let regex = /[a-z]+@[a-z]+\.[a-z]+/;

   
    inputElement.addEventListener('change', (e) => {
        if (!regex.test(e.currentTarget.value)) {
            e.currentTarget.className = 'error';
        } else {
            e.currentTarget.className = '';
        }
    });
}