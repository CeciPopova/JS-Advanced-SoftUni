class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;

    };

    ripenPlant(plantName, quantity) {
        let currPlant = this.plants.find(p => p.plantName == plantName);
        if (currPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (currPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        currPlant.ripe = true;
        currPlant.quantity += quantity;
        if (currPlant.quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if (currPlant.quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    };

    harvestPlant(plantName) {
        let currPlant = this.plants.find(p => p.plantName == plantName);
        if (currPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (currPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.spaceAvailable += currPlant.spaceRequired;
        this.storage.push({
            plantName: currPlant.plantName,
            quantity: currPlant.quantity

        });
        return `The ${plantName} has been successfully harvested.`
    };

    generateReport() {
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.\n`;
        result += `Plants in the garden: `
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        sortedPlants.forEach(p => result += `${p.plantName}, `);
        result = result.substring(0, result.length - 2);
        result += '\n';
        if (this.storage.length === 0) {
            result += "Plants in storage: The storage is empty.";
        } else {
            result += `Plants in storage: `;
            this.storage.forEach(p => result += `${p.plantName} (${p.quantity}), `);
           
        }
        result = result.substring(0, result.length - 2);
            
        return result;

    };
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

