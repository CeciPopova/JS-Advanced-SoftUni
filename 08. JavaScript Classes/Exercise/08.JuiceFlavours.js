function solve(input) {
    let result = new Map();
    let bottles = new Map();
    for (let str of input) {
        let [juice, quantity] = str.split(' => ');
        if (!result.has(juice)) {
            result.set(juice, Number(quantity));

            for (let [juice, quantity] of result) {
                if (quantity >= 1000) {
                    let bottle = Math.floor(quantity / 1000);
                    bottles.set(juice, bottle);
                }
            }
        } else {
            let totalQuantity = result.get(juice);
            totalQuantity += Number(quantity);
            result.set(juice, totalQuantity);

            for (let [juice, quantity] of result) {
                if (quantity >= 1000) {
                    let bottle = Math.floor(quantity / 1000);
                    bottles.set(juice, bottle);
                }
            }
        }
    }
   for (let [juice, count] of bottles) {
    console.log(`${juice} => ${count}`);
   }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
