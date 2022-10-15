function sumTable() {
    let elements = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum =0;

    //     let sum = Array.from(elements).reduce((acc, v) => {
    //         let currValue = Number(v.textContent) || 0;
    //         return acc + currValue;
    // },0);    

    // let resultElement = document.getElementById('sum')
    // resultElement.textContent = sum;
    
    let array = Array.from(elements);

    for (let index = 0; index < array.length-1; index++) {
        sum += Number(array[index].textContent);

    }
    let result =document.getElementById('sum');
    result.textContent = sum;
}