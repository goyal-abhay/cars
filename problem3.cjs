let carModels = (inventory) => {
     const ans = []
     for (let i=0; i<inventory.length; i++){
        ans.push(inventory[i].car_model);
     }
     const result = ans.sort();
     return result
}

module.exports = carModels;