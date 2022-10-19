function solve(input, start,end) {
    if (!Array.isArray(input)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, input.length-1);

   let sub = input.slice(startIndex, endIndex + 1);
   let sum = sub.reduce((acc,x) => acc + Number(x),0);
   return sum;

}

module.exports = solve;
//console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));