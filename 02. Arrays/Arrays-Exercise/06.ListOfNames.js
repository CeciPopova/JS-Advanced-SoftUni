function solve(names) {

//     let sortedNames = names.sort((a, b) => a.localeCompare(b));
    
//     let i = 1;
//    for (let index = 0; index < sortedNames.length; index++) {
//     console.log(`${i}.${sortedNames[index]}`);
//     i++;
    
//    }
  let result = names
  .sort((a, b) => a.localeCompare(b))
  .forEach((name , i) => console.log(`${i + 1}.${name}`));

}
solve(["John", "Bob", "Christina", "Ema"]);