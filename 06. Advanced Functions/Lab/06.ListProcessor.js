function solve(input) {
    result = [];
    for (let i = 0; i < input.length; i++) {
        let [cmnd, str] = input[i].split(' ');
        if (cmnd === 'add') {
            result.push(str);
        } else if (cmnd == 'remove') {
            for (let j = 0; j < result.length; j++) {
                if (result[j] === str) {
                    result.splice(result.indexOf(str), 1);

                }
            }
        }else if(cmnd ==='print'){
            console.log(result.join(','));
        }
    }
   
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);