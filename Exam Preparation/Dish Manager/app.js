window.addEventListener("load", solve);

function solve() {
  let submitBtn = document.getElementById("form-btn");
  submitBtn.addEventListener('click', submitForm);

  let inputFirstNameElement = document.getElementById("first-name");
  let inputLastNameElement = document.getElementById("last-name");
  let inputAgeElement = document.getElementById("age");
  let inputGenderElement = document.getElementById("genderSelect");
  let inputTextArea = document.getElementById("task");
  let ulProgressElement = document.getElementById("in-progress");
  let ulFinishedElement = document.getElementById("finished");
  let progressCountElement = document.getElementById("progress-count");
  let clearBtn = document.getElementById("clear-btn");

 
  let count = 0;

  function submitForm(e) {
    let firstName = inputFirstNameElement.value;
    let lastName = inputLastNameElement.value;
    let age = inputAgeElement.value;
    let gender = inputGenderElement.value;
    let dishDescription = inputTextArea.value;

    if (!firstName || !lastName || !age || !dishDescription) {
      return;
    }

    inputFirstNameElement.value = '';
    inputLastNameElement.value = '';
    inputAgeElement.value = '';
    inputGenderElement.value = '';
    inputTextArea.value = '';

    createProgressElement(firstName, lastName, age, gender, dishDescription);
    count++;
    progressCountElement.textContent = count;
  }

  function createProgressElement(firstName, lastName, age, gender, dishDescription) {
    let li = document.createElement('li');
    li.classList.add('each-line');
    let h4 = document.createElement('h4');
    h4.textContent = firstName + ' ' + lastName;
    let pEl = document.createElement('p');
    pEl.textContent = gender + ', ' + age;
    let p = document.createElement('p');
    p.textContent = `Dish description: ${dishDescription}`;
    let article = document.createElement('article');
    article.appendChild(h4);
    article.appendChild(pEl);
    article.appendChild(p);
    li.appendChild(article);
    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Mark as complete'
    li.appendChild(completeBtn);
    ulProgressElement.appendChild(li);


    editBtn.addEventListener('click', editInfo);

    completeBtn.addEventListener('click', completeInfo);
  }

  function editInfo(e) {

    let liElement = e.target.parentElement;
    let h4 = liElement.getElementsByTagName('h4')[0];
    let [firstName, lastName] = h4.textContent.split(' ');

    let personalInfo = liElement.getElementsByTagName('p')[0];
    let description = liElement.getElementsByTagName('p')[1];
    let [gender, age] = personalInfo.textContent.split(', ');

    inputFirstNameElement.value = firstName;
    inputLastNameElement.value = lastName;
    inputAgeElement.value = Number(age);
    inputGenderElement.value = gender;
    inputTextArea.value = description.textContent.split(': ')[1];
    liElement.innerHTML = '';
    count--;
    progressCountElement.textContent = count;

  }

  function completeInfo(e) {
    let liElement = e.target.parentElement;
    let article = liElement.getElementsByTagName('article')[0];
    ulFinishedElement.appendChild(article);
    liElement.textContent = '';
    count--;
    progressCountElement.textContent = count;
    clearBtn.addEventListener('click', () =>{
      article.remove();
    });

  }

 


}
