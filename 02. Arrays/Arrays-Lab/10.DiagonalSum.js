function solve(input) {
   
    let mainSum = 0;
    let secondSum = 0;

    for (let row = 0; row < input.length; row++) {

       mainSum += input[row][row];
       secondSum += input[row][input[row].length - 1 - row];
    }
    let result = mainSum + ' ' + secondSum;
    return result;
}

console.log(solve([[20, 40],
    [10, 60]]
    )); 