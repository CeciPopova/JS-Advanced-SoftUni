function solve(n,k){

    let arr = [1];
    
    for (let i = 1; i < n; i++) {
      let startIndex = i - k ;
      if (startIndex < 0) {
        startIndex = 0;
      }
      arr.push(arr.slice(startIndex).reduce((acc, num)=> acc + num));

    }
    return arr;
}
console.log(solve(6,3));