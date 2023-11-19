const Carburant = require('../Models/Carburant')

//Creer un carburant
const carburants = async (CarburantData) => {
    try {
        const newCarburant = new Carburant(CarburantData)
        return await newCarburant.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllCarburant = async () => {
    try {
        return await Carburant.find()
    } catch (error) {
        throw error
    }
}
module.exports = {carburants, getAllCarburant}
