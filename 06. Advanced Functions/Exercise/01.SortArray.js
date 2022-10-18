function solve(array, criteria) {
    
    if(criteria === 'asc'){
        array.sort((a,b) => a-b);

    }else{
        array.sort((a,b) => b-a);
    }
   //console.log(array);
   return array;
}
solve([14, 7, 17, 6, 8], 'asc')