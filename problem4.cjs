let carYears = (inventory) => {
    const years = [];
    if (inventory.length===0 || !Array.isArray(inventory)){
        return [];
     }
    for (let index=0; index<inventory.length; index++) {
        years.push(inventory[index].car_year);
    }
    return years;
}

module.exports = carYears;