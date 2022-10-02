function solve(input) {
    let num = 1;
    let result = [];

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element === 'add') {
            result.push(num);
        }else if (element === 'remove') {
            result.pop();
        }
        num++;
    }
    return result.length == 0 ? 'Empty' : result.join('\n');

}
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
));

console.log(solve(['remove', 
'remove', 
'remove']
));