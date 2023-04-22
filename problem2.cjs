let lastCar = (inventory) => {
    if (inventory.length===0 || !Array.isArray(inventory)){
        return [];
    }
    return inventory[inventory.length-1];
}

module.exports = lastCar;