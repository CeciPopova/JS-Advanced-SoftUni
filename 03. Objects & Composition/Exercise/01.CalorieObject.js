function solve(input) {
    let result = {};
    for (let i = 0; i < input.length - 1; i+=2) {
       
        let key = input[i];
        let value = input[i+1];
        result[key] = Number(value);
    }
    console.log(result);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);