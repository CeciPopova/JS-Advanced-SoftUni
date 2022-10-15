function extractText() {
    // let ulElement= document.getElementById('items');
    
    // let textareaElement = document.getElementById('result');
    // textareaElement.textContent = ulElement.textContent;
    let liElements = document.getElementsByTagName('li');
    let outputElement = document.getElementById('result');
    for (const el of liElements) {
        outputElement.value += el.textContent + '\n';
    }

}