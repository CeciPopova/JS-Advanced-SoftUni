function create(array) {
   
    let parentElement = document.getElementById('content');

    for (let i = 0; i < array.length; i++) {
       
        let divElement = document.createElement('div');
        let pElement = document.createElement('p');
        let hiddenText = array[i];
        pElement.textContent = hiddenText;

        //let text = document.createTextNode(array[i]);
        //pElement.appendChild(text);
        
        pElement.style.display = 'none';
        divElement.appendChild(pElement);
        parentElement.appendChild(divElement);
        divElement.addEventListener('click', showText);
    }
    function showText(e) {
        e.target.firstChild.style.display = 'block';
    }

}