window.addEventListener("load", solve);

function solve() {

  document.getElementById('publish-btn').addEventListener('click', createPost);
  let inputTitleElement = document.getElementById('post-title');
  let inputCategoryElement = document.getElementById('post-category');
  let inputContentElement = document.getElementById('post-content');
  let ulReviewListElement = document.getElementById('review-list')

  function createPost(e) {

    let title = inputTitleElement.value;
    let category = inputCategoryElement.value;
    let content = inputContentElement.value;
    if (!title || !category || !content) {
      return;
    }
    createDomElements(title, category, content)
  }

  function createDomElements(title, category, content) {

    let liElement = document.createElement('li');
    liElement.classList.add('rpost');
    let article = createArticle(title, category, content);
    
    let editBtn = document.createElement('button');
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = 'Edit';

    let approveBtn = document.createElement('button');
    approveBtn.classList.add("action-btn");
    approveBtn.classList.add("approve");
    approveBtn.textContent = 'Approve';
     
    liElement.appendChild(article);

    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);

    ulReviewListElement.appendChild(liElement);

  }
  function createArticle(title, category, content){
    let articleElement = document.createElement('article')
    let h4TitelElement = document.createElement('h4');
    let pCategoryElement = document.createElement('p');
    let pContentElement = document.createElement('p');

    h4TitelElement.textContent = title;
    pCategoryElement.textContent = `Categoty: ${category}`;
    pContentElement.textContent = `Content: ${content}`;

    articleElement.appendChild(h4TitelElement);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pContentElement);
    return articleElement;
  }
   
  }


