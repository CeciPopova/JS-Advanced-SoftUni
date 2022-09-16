// function cookingByNumbers(inputNumber, command1, command2, command3, command4, command5){

  
//     inputNumber = manipulator(inputNumber, command1);
//     inputNumber = manipulator(inputNumber, command2);
//     inputNumber = manipulator(inputNumber, command3);
//     inputNumber = manipulator(inputNumber, command4);
//     inputNumber = manipulator(inputNumber, command5);
function cookingByNumbers(inputNumber, ...commands){
    // for (let i = 0; i < commands.length; i++){
    //     inputNumber= manipulator(inputNumber,commands[i]);
    // }


    commands.forEach(x => {
        inputNumber=manipulator(inputNumber,x)
    })
    
    function manipulator(num,command){
        switch(command){
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":   
                num += 1;
                console.log(num);
                break; 
            case "bake":    
                num *= 3;
                console.log(num);
                break;
            case "fillet":    
                num *= 0.80;
                console.log(num);
                break;
        }
        return num
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
