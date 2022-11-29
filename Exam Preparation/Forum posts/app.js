window.addEventListener("load", solve);

function solve() {

  document.getElementById('publish-btn').addEventListener('click', createPost);
  document.getElementById('clear-btn').addEventListener('click', clearPost);
  let inputTitleElement = document.getElementById('post-title');
  let inputCategoryElement = document.getElementById('post-category');
  let inputContentElement = document.getElementById('post-content');
  let ulReviewListElement = document.getElementById('review-list');
  let ulPublishListElement = document.getElementById('published-list');


  function createPost(e) {

    let title = inputTitleElement.value;
    let category = inputCategoryElement.value;
    let content = inputContentElement.value;
    if (!title || !category || !content) {
      return;
    }
    createDomElements(title, category, content);
    inputTitleElement.value = '';
    inputCategoryElement.value = '';
    inputContentElement.value = '';

  }

  function createDomElements(title, category, content) {

    let liElement = document.createElement('li');
    liElement.classList.add('rpost');
    let article = createArticle(title, category, content);

    let editBtn = document.createElement('button');
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', editPost);

    let approveBtn = document.createElement('button');
    approveBtn.classList.add("action-btn");
    approveBtn.classList.add("approve");
    approveBtn.textContent = 'Approve';

    approveBtn.addEventListener('click', approvePost);

    liElement.appendChild(article);

    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);

    ulReviewListElement.appendChild(liElement);


  }
  function createArticle(title, category, content) {
    let articleElement = document.createElement('article')
    let h4TitelElement = document.createElement('h4');
    let pCategoryElement = document.createElement('p');
    let pContentElement = document.createElement('p');

    h4TitelElement.textContent = title;
    pCategoryElement.textContent = `Category: ${category}`;
    pContentElement.textContent = `Content: ${content}`;

    articleElement.appendChild(h4TitelElement);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pContentElement);
    return articleElement;
  }

  function editPost(e) {
    let currentPost = e.target.parentElement;
    let articleContent = currentPost.getElementsByTagName('article')[0].children;
    let title = articleContent[0].textContent;
    let category = articleContent[1].textContent.split(": ")[1];
    let content = articleContent[2].textContent.split(": ")[1];
    
    inputTitleElement.value = title;
    inputCategoryElement.value = category;
    inputContentElement.value = content;

    currentPost.remove();

  }

  function approvePost(e) {

    let currentPost = e.target.parentElement;
    ulPublishListElement.appendChild(currentPost);
    Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove())
  }

  function clearPost(e) {
    Array.from(ulPublishListElement.children).forEach(li => li.remove());

  }
}

