function solve(input, step) {
    let result = [];
    
    for (let index = 0; index < input.length; index += step) {
        const element = input[index];
        result.push(element);
        
    }
    return result;
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));