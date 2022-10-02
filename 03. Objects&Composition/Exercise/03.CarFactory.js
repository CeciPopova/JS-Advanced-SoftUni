function solve(obj) {
   
   let wheels  = Array(4);
   obj.wheelsize % 2 == 0 ? wheels.fill(obj.wheelsize-1, 0, 4) 
   : wheels.fill(obj.wheelsize, 0, 4);

   function getEngine(power) {
    if (power>120) {
        return {power: 200, volume: 3500 };
    }else if (power>90){
        return {power: 120, volume: 2400 };
    }else{
        return {power: 90, volume: 1800 };
    }
   }

   let car = {
    model: obj.model,
    engine: getEngine(obj.power),
    carriage: {type: obj.carriage, color: obj.color},
    wheels
   }
    return car;
}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))
