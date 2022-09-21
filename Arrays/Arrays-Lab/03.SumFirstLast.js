function solve(input) {
    
    let arr = input.map(Number);
    let sum = arr[0] + arr[arr.length-1];
    return sum;
}

console.log(solve(['20','30','40']));