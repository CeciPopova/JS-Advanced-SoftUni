function solve(input) {
    let result = {};
    for (let i = 0; i < input.length - 1; i += 2) {
        result[input[i]] = Number(input[i + 1]);
    }
    console.log(result);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);