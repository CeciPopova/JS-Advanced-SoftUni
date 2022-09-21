function solve(input) {
    let arr = [];
    
    for (let index = 0; index < input.length; index++) {
        let element = input[index];
        if (element < 0) {
            arr.unshift(element);
        }else{
            arr.push(element);
        }
        
    }
   
 console.log(arr.join('\n'));
 
}

  solve([3, -2, 0, -1])