let year2000 = (inventory) => {
    const ans = []
    if (!inventory || inventory.length===0 || !Array.isArray(inventory)){
        return [];
     }
    for (let index=0; index<inventory.length; index++){
        if (inventory[index].car_year < 2000) {
            ans.push(inventory[index].car_year);
        }
    }
    return ans
}

module.exports = year2000;