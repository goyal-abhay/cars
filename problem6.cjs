let BMW_Audi = inventory => {
    const BMWAndAudi = []
    if (inventory.length===0 || !Array.isArray(inventory)){
        return [];
     }
    for (let index=0; index<inventory.length; index++){
        if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi'){
            BMWAndAudi.push(inventory[index]);
        }
    }
    return BMWAndAudi;
}

module.exports = BMW_Audi;