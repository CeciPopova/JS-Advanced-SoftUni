class VegetableStore {
    constructor(owner, location) {
        this.owner = owner,
            this.location = location,
            this.availableProducts = [],
            this.vegetable = {}

    }
    loadingVegetables(vegetables) {
        for (let i = 0; i < vegetables.length; i++) {
            let currVegetable = vegetables[i].split(' ');
            let type = currVegetable[0];
            let quantity = Number(currVegetable[1]);
            let price = Number(currVegetable[2]);
            this.vegetable = {
                type,
                quantity,
                price
            }
            let product = this.availableProducts.find(p => p.type === type);
            let index = this.availableProducts.indexOf(product);
            if (!product) {
                this.availableProducts.push(this.vegetable);
            } else {
                this.availableProducts[index].quantity += quantity;
                if (this.availableProducts[index].price < price) {
                    this.availableProducts[index].price = price;
                }
            }
        }
        let result = [];
        result = this.availableProducts.map(p => p.type);
        return `Successfully added ${result.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let i = 0; i < selectedProducts.length; i++) {
            let currVegetable = selectedProducts[i].split(' ');
            let type = currVegetable[0];
            let quantity = Number(currVegetable[1]);

            let product = this.availableProducts.find(p => p.type === type);
            let index = this.availableProducts.indexOf(product);
            if (!product) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }else if(product.quantity < quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                totalPrice += product.price * quantity;
                this.availableProducts[index].quantity -= quantity;
               
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity){
        let product = this.availableProducts.find(p => p.type === type);
        let index = this.availableProducts.indexOf(product);
        if (!product) {
            throw new Error (`${type} is not available in the store.`)
        } else if(product.quantity <= quantity){
            this.availableProducts[index].quantity = 0;
            return   `The entire quantity of the ${type} has been removed.`;
        }else{
            this.availableProducts[index].quantity -= quantity;
            return  `Some quantity of the ${type} has been removed.`
        }
    }

    revision (){
        let result = '';
        result += "Available vegetables:\n";
        let sortedProducts = this.availableProducts.sort((a, b) => a.price - b.price);
        sortedProducts.forEach(p => result += `${p.type}-${p.quantity}-$${p.price.toFixed(1)}\n`);
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return result;

    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

