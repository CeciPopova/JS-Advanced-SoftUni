function solve(arr, flavour1, flavour2){
    let start = arr.indexOf(flavour1);
    let end = arr.indexOf(flavour2);

    let result = arr.slice(start,end+1);
    return result;

}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));