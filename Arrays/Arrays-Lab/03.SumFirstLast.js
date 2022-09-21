function solve(arr) {
  let sum = Number(arr[0]) + Number(arr[arr.length-1]);
  return sum;
}

console.log(solve(['20','30','40']));