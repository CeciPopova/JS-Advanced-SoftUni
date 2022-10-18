function solution() {
    let storeElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }
   let action = {
    restock:(microelement, quantity) => {
        storeElements[microelement] += Number(quantity);
        return 'Success';
    },
    prepare:(recipe, quantity) => {
        let microElementsNeeded = recipes[recipe];
        let isEnough = true;
        for (const element in microElementsNeeded) {
           if (storeElements[element] < (microElementsNeeded[element] * quantity)) {
            isEnough = false;
            return `Error: not enough ${element} in stock`;
           }else{
            storeElements[element] -= (microElementsNeeded[element] * quantity);
           }

        }
        if (isEnough) {
            return 'Success';
        }
    },
    report: () => {
        let result = [];
        for (let element in storeElements) {
            result.push(`${element}=${storeElements[element]}`);
        }
        return result.join(' ');
    }

   };
   function foodManager(args) {
    let [command, recipe, quantity] = args.split(' ');
    return action[command](recipe, quantity);

}
return foodManager;

}
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55