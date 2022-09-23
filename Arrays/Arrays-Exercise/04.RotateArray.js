function solve(imput, num) {
    for (let index = 0; index < num ; index++) {
        imput.unshift(imput.pop());
        // let element = imput.pop();
        // imput.unshift(element);
    }
    return imput.join(' ');
}
console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15 ));