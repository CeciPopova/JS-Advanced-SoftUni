window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const describtionElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let model = modelInputElement.value;
        let describtion =describtionElement.value
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        if (!model || !describtion) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellEllement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionCellElement = document.createElement('td')
        let infoButtonElement = document.createElement('button');
        let buyButtonElement = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');


        modelCellEllement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');
        buyButtonElement.textContent= 'Buy it';
        buyButtonElement.classList.add('buyBtn');
        infoButtonElement.addEventListener('click', (e) => {
            if(e.currentTarget.textContent == 'More Info'){
                e.currentTarget.textContent = 'Less Info'
            }else{
                e.currentTarget.textContent = 'More Info';
            }
        });

        actionCellElement.appendChild(infoButtonElement);
        actionCellElement.appendChild(buyButtonElement);

        rowElement.classList.add('info');

        rowElement.appendChild(modelCellEllement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);
        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${describtion}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'contents';

        furnitureListElement.appendChild(rowElement);
    });


}
