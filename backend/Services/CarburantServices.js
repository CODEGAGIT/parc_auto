const CarburantRepository = require("../Repository/CarburantRepository")

//creer un carburant
const createCarburant = async(CarburantData) => {
    try {
        return await CarburantRepository.carburants(CarburantData)
    } catch (error) {
        console.log(error);
    }
}

const getAllCarburant = async () => {
    try {
        return await CarburantRepository.getAllCarburant()
    } catch (error) {
        throw error
    }
}
module.exports = {createCarburant, getAllCarburant}