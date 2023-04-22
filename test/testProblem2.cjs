const inventory = require('../inventory.cjs')
const lastCar = require('../problem2.cjs')

let result = lastCar(inventory)
console.log(`Last car is a ${result.car_make} ${result.car_model}`)