let BMW_Audi = inventory => {
    const BMWAndAudi = []
    for (let i=0; i<inventory.length; i++){
        if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi'){
            BMWAndAudi.push(inventory[i]);
        }
    }
    return BMWAndAudi;
}

module.exports = BMW_Audi;