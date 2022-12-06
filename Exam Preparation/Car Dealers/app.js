window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish");
  publishBtn.addEventListener('click', submitInfo);

  let inputMakeElement = document.getElementById("make");
  let inputModelElement = document.getElementById("model");
  let inputYearElement = document.getElementById("year");
  let inputFuelElement = document.getElementById("fuel");
  let inputOriginalCost = document.getElementById("original-cost");
  let inputSellingPrice = document.getElementById("selling-price");

  let tableBodyElement = document.getElementById("table-body");

  let ulCarsList = document.getElementById("cars-list");

  let profitElement = document.getElementById("profit");
  

  function submitInfo(e) {
    e.preventDefault();

    let make = inputMakeElement.value;
    let model = inputModelElement.value;
    let year = inputYearElement.value;
    let fuel = inputFuelElement.value;
    let originalPrice = inputOriginalCost.value;
    let sellingPrice = inputSellingPrice.value;


    if (!make || !model || !year || !fuel || !originalPrice || !sellingPrice || originalPrice > sellingPrice) {
      return;
    }
    inputMakeElement.value = '';
    inputModelElement.value = '';
    inputYearElement.value = '';
    inputFuelElement.value = '';
    inputOriginalCost.value = '';
    inputSellingPrice.value = '';
    createElement(make, model, year, fuel, originalPrice, sellingPrice);
  }
  function createElement(make, model, year, fuel, originalPrice, sellingPrice) {


    let trRow = document.createElement('tr');
    trRow.classList.add('row');
    let tdMake = document.createElement('td');
    tdMake.textContent = make;
    let tdModel = document.createElement('td');
    tdModel.textContent = model;
    let tdYear = document.createElement('td');
    tdYear.textContent = year;
    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuel;
    let tdOriginalPrice = document.createElement('td');
    tdOriginalPrice.textContent = originalPrice;
    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice;

    let editBtn = document.createElement('button');
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', editInfo);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add("action-btn");
    sellBtn.classList.add("sell");
    sellBtn.textContent = 'Sell';

    sellBtn.addEventListener('click', sellInfo);

    let td = document.createElement('td');
    td.appendChild(editBtn);
    td.appendChild(sellBtn);

    trRow.appendChild(tdMake);
    trRow.appendChild(tdModel);
    trRow.appendChild(tdYear);
    trRow.appendChild(tdFuel);
    trRow.appendChild(tdOriginalPrice);
    trRow.appendChild(tdSellingPrice);
    trRow.appendChild(td);

    tableBodyElement.appendChild(trRow);
  }

  function editInfo(e) {
    let tr = e.target.parentElement.parentElement;
    let infoArr = tr.querySelectorAll('td');
    let make = infoArr[0].textContent;
    let model = infoArr[1].textContent;
    let year = infoArr[2].textContent;
    let fuel = infoArr[3].textContent;
    let originalPrice = infoArr[4].textContent;
    let sellPrice = infoArr[5].textContent;

    inputMakeElement.value = make;
    inputModelElement.value = model;
    inputYearElement.value = year;
    inputFuelElement.value = fuel;
    inputOriginalCost.value = originalPrice;
    inputSellingPrice.value = sellPrice;

    tr.parentElement.textContent = '';
  }

  function sellInfo(e) {
    e.preventDefault();
    let tr = e.target.parentElement.parentElement;
    let infoArr = tr.querySelectorAll('td');
    let make = infoArr[0].textContent;
    let model = infoArr[1].textContent;
    let year = infoArr[2].textContent;
    let fuel = infoArr[3].textContent;
    let originalPrice = infoArr[4].textContent;
    let sellPrice = infoArr[5].textContent;

    let li = document.createElement('li');
    li.classList.add('each-list');
    let spanModel = document.createElement('span');
    spanModel.textContent = `${make} ${model}`;
    let spanYear = document.createElement('span');
    spanYear.textContent = year;
    let spanPrice = document.createElement('span');
    spanPrice.textContent = Number(sellPrice) - Number(originalPrice);

    li.appendChild(spanModel);
    li.appendChild(spanYear);
    li.appendChild(spanPrice);

    ulCarsList.appendChild(li);

    let profit = Number(profitElement.textContent) + (sellPrice-originalPrice);
    
    profitElement.textContent = `${profit.toFixed(2)}`;


    tr.parentElement.textContent = '';
  }
}
