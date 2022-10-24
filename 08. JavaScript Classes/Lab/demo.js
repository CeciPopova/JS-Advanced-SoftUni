class Cat {
    isHungry = true;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log('Meauooo');
    }

    static vetCheck(cat) {
        if(cat.isHungry) {
            console.log('This cat should be fed!');
        }else{
            console.log('The cat is fine!');
        }

    }
}

let firstCat = new Cat('Navcho');
let secondCat = new Cat('Garry')


// console.log(firstCat);
// console.log(secondCat);


let catNames = [
    'Navcho',
    'Garry',
    'Mishy',
    'Zuza',
    'Sisa',
];

let cats = catNames.map(x => new Cat(x));

//cats.forEach(c => c.makeSound());
 let cat = new Cat('Navcho');
 
cat.makeSound();
Cat.vetCheck(cat);




