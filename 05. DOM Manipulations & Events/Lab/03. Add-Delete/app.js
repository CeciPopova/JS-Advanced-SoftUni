function addItem() {
   
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    let items = document.getElementById('items');
    li.textContent = input.value;
    input.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', deleteFunction);

    function deleteFunction(ev) {
        ev.target.parentElement.remove();
    }

    li.appendChild(deleteElement);
    items.appendChild(li);
}