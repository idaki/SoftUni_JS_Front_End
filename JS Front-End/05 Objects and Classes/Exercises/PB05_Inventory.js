function createHeoesRegister(inputArr) {
    let heroes = [];

    inputArr.forEach(h => {
        let hero = {
            name: h.split(' / ')[0],
            level: h.split(' / ')[1],
            items: h.split(' / ')[2]
        };
        heroes.push(hero);
    });

heroes.sort((a,b)=> a.level- b.level); 
heroes.forEach(hero=>{
console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);

})

}


createHeoesRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);