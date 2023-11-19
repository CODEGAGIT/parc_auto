const GarageRepository = require("../Repository/GarageRepository")

//creer un Garage
const createGarage = async(GarageData) => {
    try {
        return await GarageRepository.Garages(GarageData)
    } catch (error) {
        console.log(error);
    }
}

/**obtenir la liste des garage*/
const getAllGarage = async () => {
    try {
        return await GarageRepository.getAllGarage()
    } catch (error) {
        throw error
    }
}
module.exports = {createGarage, getAllGarage}