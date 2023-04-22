

let carByID = (inventory, id) => {
    if (!inventory || inventory.length===0 || typeof id !== 'number' || !Array.isArray(inventory)){
        return [];
    }
    for (let index = 0; index<inventory.length; index++){
        if (inventory[index].id === id){
            return inventory[index];
        } 
    }
}

module.exports = carByID;
