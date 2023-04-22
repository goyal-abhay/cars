let carModels = (inventory) => {
   if (inventory.length===0 || !Array.isArray(inventory)){
      return [];
   }
     const ans = []
     for (let index=0; index<inventory.length; index++){
        ans.push(inventory[index].car_model);
     }
     const result = ans.sort();
     return result
}

module.exports = carModels;