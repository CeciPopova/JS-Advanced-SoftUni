function solve(num1, num2, str) {
    let result = 0;
    switch (str) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            break;
    }


    console.log(result);
}
solve(5, 6, '+');