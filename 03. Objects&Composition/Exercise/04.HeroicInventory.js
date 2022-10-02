function solve(array) {
   let heroes = [];
   for (let index = 0; index < array.length; index++) {
    let heroInfo = array[index];
   let[name, level, items] = heroInfo.split(' / ');
   level = Number(level);
   items = items ? items.split(', ') : [];

   heroes.push({name, level, items});
   }
   return JSON.stringify(heroes);
    
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));