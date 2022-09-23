function solve(input){
    let result = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < input.length; index++) {
       let biggestNum = Math.max(...input[index]);
       if (biggestNum > result) {
        result = biggestNum;
       }
    }

    return result;

}
console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));  

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));
