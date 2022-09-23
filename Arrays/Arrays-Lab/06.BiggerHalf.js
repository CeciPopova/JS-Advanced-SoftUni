function solve(input) {
    let length = input.length/2;
    let start = Number.isInteger(length)? length: length-0.5;

    let result = input.sort((a, b)=> a - b).slice(start);
    return result;
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));