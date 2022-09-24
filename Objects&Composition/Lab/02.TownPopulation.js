function solve(townsArr) {
    let towns = {};
    for (const town of townsArr) {
        let[name, population] = town.split(' <-> ');
        population = Number(population);
        if (!towns[name]) {
            towns[name] = 0;
        }
        towns[name] += Number(population);
    }
    for (let currTown in towns) {
        console.log(`${currTown} : ${towns[currTown]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)
