function solve(input) {
    let sum = input.reduce((acc,a) => acc + a, 0);
    let result = input.map(x => 1/x).reduce((acc, a) => acc + a, 0);
   
    let str = input.map(x => x.toString());
    let concat = '';
    for (let index = 0; index < str.length; index++) {
        concat += str[index];
    }
    console.log(sum);
    console.log(result);
    console.log(concat);
}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);