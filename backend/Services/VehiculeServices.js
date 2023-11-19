const VehiculeRepository = require("../Repository/VehiculeRepository")

//creer un service vehicule
const createVehicule = async(VehiculeData) => {
    try {
        return await VehiculeRepository.Vehicule(VehiculeData)
    } catch (error) {
        console.log(error);
    }
}

const getAllVehicule = async () => {
    try {
        return await VehiculeRepository.getAllVehicule()
    } catch (error) {
        throw error
    }
}
module.exports = {createVehicule, getAllVehicule}
