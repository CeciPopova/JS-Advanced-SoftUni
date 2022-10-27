function solve(num1, num2, num3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    if (num1 > num2 && num1 > num3) {
        maxNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        maxNum = num2;
    }else{
        maxNum = num3;
    }

    console.log(`The largest number is ${maxNum}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);