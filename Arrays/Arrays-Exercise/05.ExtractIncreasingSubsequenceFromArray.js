function solve(input) {
    let result = [];
    let biggestNum = 0;
    
    for (let i = 0; i < input.length; i++) {
       if (input[i] > biggestNum) {
        result.push(input[i]);
        biggestNum = input[i];
       }
    }
    return result;
}
console.log(solve([1, 
    2, 
    3,
    4]
    ))