function solve() {
  let resultElement = document.getElementById('result');
  let inputBtn = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let result = '';
  if (convention === 'Camel Case') {
    for (let i = 0; i < inputBtn.length; i++) {
      if (inputBtn[i] === ' ') {
        result += inputBtn[i + 1].toUpperCase();
        i++;
      } else {
        result += inputBtn[i];
      }
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < inputBtn.length; i++) {
      if (inputBtn[i] === ' ') {
        result += inputBtn[i + 1].toUpperCase();
        i++;
      } else {
        if (i === 0) {
          result += inputBtn[0].toUpperCase();
        } else {
          result += inputBtn[i];
        }
      }
    }
  } else {
    result = 'Error!'
  }
  resultElement.textContent = result;
  return resultElement;
}