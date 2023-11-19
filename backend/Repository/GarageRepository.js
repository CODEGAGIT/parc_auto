const Garage = require('../Models/Garage')

//Creer un garage
const Garages = async (GarageData) => {
    try {
        const newGarage = new Garage(GarageData)
        return await newGarage.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste des garages*/
const getAllGarage = async () => {
    try {
        return await Garage.find();
    } catch (error) {
        throw error
    }
}
module.exports = {Garages, getAllGarage}
