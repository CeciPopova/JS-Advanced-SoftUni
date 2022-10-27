function solve(firstNum, secondNum) {
    let num1 = Number(firstNum);
    let num2 = Number(secondNum);
    let result = 0;
    for (let index = num1; index <= num2; index++) {
       result += index;
    }
    console.log(result);
}

solve('1', '5');
