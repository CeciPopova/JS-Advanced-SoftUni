class Circle {
    constructor(radius) {
        this.radius = radius;

    }

    get area(){
        return Math.PI * this.radius**2;
    }

    get diameter() {
        return this.radius * 2;
    }
    set diameter(value){
        if (value < 0) {
            throw new Error('Diameter can not be zero or less!')
        }
        this.radius = value/2; 
    }
}

let circle = new Circle(2);
console.log(circle.diameter);

circle.diameter = 3;
console.log(circle.area);