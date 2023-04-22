let year2000 = (inventory) => {
    const ans = []
    for (let i=0; i<inventory.length; i++){
        if (inventory[i].car_year < 2000) {
            ans.push(inventory[i].car_year);
        }
    }
    return ans
}

module.exports = year2000;