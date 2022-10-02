function solve(matrix) {
   
   let sum = matrix[0].reduce((acc,num) => acc + num);
   let currSum = 0;
   let isMagic = true;

   matrix.forEach(array => {
    currSum = array.reduce((acc, num) => acc + num);
    if (sum !== currSum) {
        isMagic = false;
    }
   });
   for (let col = 0; col < matrix.length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        colSum += matrix[row][col];
    }

    if (colSum !== sum) {
        isMagic = false;
        break;
    }
}
return isMagic;
}
console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    ));

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    ));