//function declaration/parameters
function printFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
//function invocation/arguments
printFullName('Ceci','Popova');

//function expression
let countDoun = function(number){
    for (let i = number; i > 0; i--) {
      console.log(i);
        
    }
}
countDoun(10);

// Arrow function
let countUp = (max) => {
    for (let index = 1; index < max; index++) {
        
        console.log(index);
    }
}
countUp(11);
