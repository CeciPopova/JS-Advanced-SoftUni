function solve(arr) {
    let obj = {};
    for (let index = 0; index < arr.length; index+=2) {
       let nameOfFood = arr[index];
       let cal = Number(arr[index + 1]);

       obj[nameOfFood] = cal;

    }
    return obj;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));