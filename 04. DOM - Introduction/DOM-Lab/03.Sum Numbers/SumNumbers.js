function calc() {
   
     let firstNumberElement = document.getElementById('num1');
     let secondNumberElement = document.getElementById('num2');

     let firstNum = Number(firstNumberElement.value);
     let secondNum = Number(secondNumberElement.value);
     let sum = firstNum + secondNum;

     let resultElement = document.getElementById('sum');
     resultElement.value = sum;

}
