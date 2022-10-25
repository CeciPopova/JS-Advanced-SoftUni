function solve(input) {
//Solution with object

    //     const brands = {};

    //     for (const item of input) {
    //         let[brand, model, quant] = item.split(' | ');

    //         if (!brands.hasOwnProperty(brand)) {
    //             brands[brand] = {};
    //         }
    //         if (!brands[brand].hasOwnProperty(model)) {
    //             brands[brand][model] = 0;
    //         }
    //         brands[brand][model] += Number(quant);

    //     }
    //     for (const [brand,models] of Object.entries(brands)) {
    //         console.log(brand);
    //         for (const [model, quant] of Object.entries(models)) {
    //             console.log(`###${model} -> ${quant}`);

    //         }
    //     }




// Solution with Map
    let collection = new Map();
    for (const line of input) {
        let [brand, model, quant] = line.split(' | ');
        quant = Number(quant);

        if (!collection.has(brand)) {
            collection.set(brand, new Map());
        }
        if (collection.get(brand).has(model)) {
            collection.get(brand).set(model, collection.get(brand).get(model) + quant);
        } else {
            collection.get(brand).set(model, quant)
        }
    }

    for (const [brand, models] of collection.entries()) {
        console.log(brand);
        
        for (const [model, quant] of models.entries()) {
            console.log(`###${model} -> ${quant}`);
        }
    }
}



solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
