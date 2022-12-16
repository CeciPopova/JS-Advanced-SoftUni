window.addEventListener('load', solve);

function solve() {
    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener('click', submitInfo);

    let inputFirstNameElement = document.getElementById("first-name");
    let inputLastNameElement = document.getElementById("last-name");
    let inputCheckInElement = document.getElementById("date-in");
    let inputCheckOutElement = document.getElementById("date-out");
    let inputGuestsCountElement = document.getElementById("people-count");

    let ulInfoList = document.querySelector(".info-list");

    let ulConfirmList = document.querySelector(".confirm-list");

    let verificationElement = document.getElementById("verification");

    function submitInfo(e) {

        e.preventDefault();
        let firstName = inputFirstNameElement.value;
        let lastName = inputLastNameElement.value;
        let checkIn = inputCheckInElement.value;
        let checkOut = inputCheckOutElement.value;
        let gestsCount = inputGuestsCountElement.value;

        if (!firstName || !lastName || !checkIn || !checkOut || !gestsCount) {
            return;
        }
        inputFirstNameElement.value = '';
        inputLastNameElement.value = '';
        inputCheckInElement.value = '';
        inputCheckOutElement.value = '';
        inputGuestsCountElement.value = '';

        createElementLi(firstName, lastName, checkIn, checkOut, gestsCount);
        nextBtn.setAttribute('disabled', true);
      
    }

    function createElementLi(firstName, lastName, checkIn, checkOut, gestsCount) {
        let li = document.createElement('li');
        li.classList.add('reservation-content');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        let pCheckIn = document.createElement('p');
        pCheckIn.textContent = `From date: ${checkIn}`;
        let pChecOut = document.createElement('p');
        pChecOut.textContent = `To date: ${checkOut}`;
        let pCount = document.createElement('p');
        pCount.textContent = `For ${gestsCount} people`;
        article.appendChild(h3);
        article.appendChild(pCheckIn);
        article.appendChild(pChecOut);
        article.appendChild(pCount);
        li.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        ulInfoList.appendChild(li); 

        editBtn.addEventListener('click', editInfo);
        continueBtn.addEventListener('click', continueInfo);

    }

    function editInfo(e) {
        
        let li = e.target.parentElement;
        let article = li.firstChild;

        let h3 = article.getElementsByTagName('h3')[0];

        let firstName = h3.textContent.split(' ')[1];
        let lastName = h3.textContent.split(' ')[2];

        let pCheckIn = article.getElementsByTagName('p')[0];
        let chekIn = pCheckIn.textContent.split(' ')[2];
        let pCheckOut = article.getElementsByTagName('p')[1];
        let checkOut = pCheckOut.textContent.split(' ')[2];
        let pCount = article.getElementsByTagName('p')[2];
        let count = pCount.textContent.split(' ')[1];

        inputFirstNameElement.value = firstName;
        inputLastNameElement.value = lastName;
        inputCheckInElement.value = chekIn;
        inputCheckOutElement.value = checkOut;
        inputGuestsCountElement.value = count;
      
        ulInfoList.textContent = '';

        console.log(count);
        nextBtn.disabled = false;

    }
    function continueInfo(e) {
        let li = e.target.parentElement;
        let article = li.firstChild;

        let h3 = article.getElementsByTagName('h3')[0];

        let pCheckIn = article.getElementsByTagName('p')[0];
        let chekIn = pCheckIn.textContent
        let pCheckOut = article.getElementsByTagName('p')[1];
        let checkOut = pCheckOut.textContent;
        let pCount = article.getElementsByTagName('p')[2];
        let count = pCount.textContent;

        let newLi = document.createElement('li');
        newLi.classList.add('reservation-content');
        let newArticle = document.createElement('article');
        let newH3 = document.createElement('h3');
        newH3.textContent = h3.textContent;
        let newPCheckIn = document.createElement('p');
        newPCheckIn.textContent = chekIn;
        let newPCheckOut = document.createElement('p');
        newPCheckOut.textContent = checkOut;
        let newPCount = document.createElement('p');
        newPCount.textContent = count;
        newArticle.appendChild(newH3);
        newArticle.appendChild(newPCheckIn);
        newArticle.appendChild(newPCheckOut);
        newArticle.appendChild(newPCount);
        newLi.appendChild(newArticle);

        let cnfrmBtn = document.createElement('button');
        cnfrmBtn.classList.add('confirm-btn');
        cnfrmBtn.textContent = 'Confirm';

        cnfrmBtn.addEventListener('click', confirmInfo);

        let cnclBtn = document.createElement('button');
        cnclBtn.classList.add('cancel-btn');
        cnclBtn.textContent = 'Cancel';

        cnclBtn.addEventListener('click', cancelInfo);

        newLi.appendChild(cnfrmBtn);
        newLi.appendChild(cnclBtn);

        ulConfirmList.appendChild(newLi);

        li.parentElement.textContent = '';

    }

    function confirmInfo(e) {
       
        ulConfirmList.textContent = '';
        nextBtn.disabled = false;

        verificationElement.textContent ="Confirmed.";
        verificationElement.classList.add("reservation-confirmed");
    }

    function cancelInfo(e) {
      
        ulConfirmList.innerHTML = '';
        nextBtn.disabled = false;

        verificationElement.textContent ="Cancelled.";
        verificationElement.classList.add("reservation-cancelled");

    }
}





