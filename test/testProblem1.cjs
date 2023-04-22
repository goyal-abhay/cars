const inventory = require('../inventory.cjs');
const carByID = require('../problem1.cjs');

let id = 33;
const result = carByID(inventory,id);
if (Array.isArray(result) || typeof result !== 'undefined'){
    console.log([])
}
else{
console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`);
}