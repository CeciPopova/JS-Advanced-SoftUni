window.addEventListener('load', solution);

function solution() {
  let submitBTN = document.getElementById('submitBTN');
  submitBTN.addEventListener('click', submitInfo);
  let inputFNameElement = document.getElementById('fname');
  let inputEmailElement = document.getElementById('email');
  let inputPhoneElement = document.getElementById('phone');
  let inputAddressElement = document.getElementById('address');
  let inputPostalCodeElement = document.getElementById('code');
  let infoPreviewElement = document.getElementById('infoPreview');

  let editBTN = document.getElementById('editBTN');
  let continueBTN = document.getElementById('continueBTN');
  let blockElement = document.getElementById('block');


  function submitInfo(e) {


    let fullName = inputFNameElement.value;
    let email = inputEmailElement.value;
    let phone = inputPhoneElement.value;
    let address = inputAddressElement.value;
    let postalCode = inputPostalCodeElement.value;


    if (!fullName || !email) {
      return;
    }
    createInfoList(fullName, email, phone, address, postalCode);


    inputFNameElement.value = '';
    inputEmailElement.value = '';
    inputPhoneElement.value = '';
    inputAddressElement.value = '';
    inputPostalCodeElement.value = '';

    submitBTN.setAttribute('disabled', true);

    editBTN.disabled = false;
    continueBTN.disabled = false;

    editBTN.addEventListener('click', editInfo);
    continueBTN.addEventListener('click', continueInfo);

  }

  function createInfoList(fullName, email, phone, address, postalCode) {
    let liName = document.createElement('li');
    liName.textContent = `Full Name: ${fullName}`;
    let liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${email}`;
    let liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${phone}`;
    let liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${address}`;
    let liCode = document.createElement('li');
    liCode.textContent = `Postal Code: ${postalCode}`;

    infoPreviewElement.appendChild(liName);
    infoPreviewElement.appendChild(liEmail);
    infoPreviewElement.appendChild(liPhone);
    infoPreviewElement.appendChild(liAddress);
    infoPreviewElement.appendChild(liCode);
  }

  function editInfo(e) {

    let liCollections = Array.from(e.target.parentElement.parentElement.getElementsByTagName('li'));

    let fullNameInfo = liCollections[0].textContent.split(': ')[1];
    let emailInfo = liCollections[1].textContent.split(': ')[1];
    let phoneInfo = liCollections[2].textContent.split(': ')[1];
    let addressInfo = liCollections[3].textContent.split(': ')[1];
    let codeInfo = liCollections[4].textContent.split(': ')[1];

    inputFNameElement.value = fullNameInfo;
    inputEmailElement.value = emailInfo;
    inputPhoneElement.value = phoneInfo;
    inputAddressElement.value = addressInfo;
    inputPostalCodeElement.value = codeInfo;

    liCollections.forEach(li => li.remove());

    submitBTN.disabled = false;
    editBTN.disabled = true;
    continueBTN.disabled = true;

    
  }
  function continueInfo(e) {

    blockElement.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = "Thank you for your reservation!";
    blockElement.appendChild(h3);

  }

}
