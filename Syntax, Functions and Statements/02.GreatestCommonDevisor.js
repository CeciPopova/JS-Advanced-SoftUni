function greatestCommonDivisior(num1, num2){
    let divisior;
    for(let i = num1 ; i > 0 ; i-- ){
        if(num1 % i == 0 && num2 % i == 0){
            divisior = i;
            break;
        }
    }
    return divisior;
}

console.log(greatestCommonDivisior(15, 5));
