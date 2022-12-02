window.addEventListener('load', solve);

function solve() {
    let sendFormBtn = document.querySelector('button[type="submit"]');
    sendFormBtn.addEventListener('click', sendForm);

    let inputTypeProductElement = document.getElementById('type-product');
    let inputDescriptionElement = document.getElementById('description');
    let inputClientNameElement = document.getElementById('client-name');
    let inputClientPhoneElement = document.getElementById('client-phone');
    let sectionReceivedOrdersElement = document.getElementById('received-orders');
    let finishSection = document.getElementById('completed-orders');
    let clearBtn = finishSection.querySelector('button');
    clearBtn.addEventListener('click', clearTask);

    function sendForm(e) {
        e.preventDefault();

        let productType = inputTypeProductElement.value;
        let description = inputDescriptionElement.value;
        let clientName = inputClientNameElement.value;
        let clientPhone = inputClientPhoneElement.value;

        if (!description || !clientName || !clientPhone) {
            return;
        }

        inputClientNameElement.value = '';
        inputClientPhoneElement.value = '';
        inputDescriptionElement.value = '';

        createOrder(productType, description, clientName, clientPhone);
    }

    function createOrder(productType, description, clientName, clientPhone) {


        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');

        let startBtn = document.createElement('button');
        let finishBtn = document.createElement('button');

        startBtn.classList.add('start-btn');
        finishBtn.classList.add('finish-btn');
        startBtn.textContent = 'Start repair';

        startBtn.addEventListener('click', beginRepair);

        finishBtn.setAttribute('disabled', true);
        finishBtn.textContent = 'Finish repair';

        finishBtn.addEventListener('click', finishRepair);


        div.classList.add('container');
        h2.textContent = `Product type for repair: ${productType}`;
        h3.textContent = `Client information: ${clientName}, ${clientPhone}`;
        h4.textContent = `Description of the problem: ${description}`;
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        sectionReceivedOrdersElement.appendChild(div);
    }

    function beginRepair(e) {
        e.target.setAttribute('disabled', true);

        let finishBtn = e.target.parentElement.getElementsByClassName('finish-btn')[0];
        finishBtn.disabled = false;
    }

    function finishRepair(e) {
        let divContainer = e.target.parentElement;
        finishSection.appendChild(divContainer);
        let buttons = divContainer.querySelectorAll('button');
        buttons[0].remove();
        buttons[1].remove();
    }

    function clearTask(e) {
        let containers = finishSection.querySelectorAll('.container');

        Array.from(containers).forEach(c => c.remove());
    }

}
