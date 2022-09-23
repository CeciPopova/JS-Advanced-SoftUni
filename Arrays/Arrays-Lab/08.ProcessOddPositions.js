function solve(input){
    // let arr =[];
    // for (let index = 0; index < input.length; index++) {
    //     let element = input[index];
    //     if (index % 2 !== 0) {
    //         arr.push(element*2);
    //     }
       
    // }
    // let result = arr.reverse().join(' ');
    // return result;
    let result = input.filter((el, i) => i % 2 !== 0)
    .map( el => el * 2)
    .reverse()
    .join(' ');

    return result;

}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));