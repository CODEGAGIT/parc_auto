const ReparationRepository = require("../Repository/ReparationRepository")

//creer une reparation
const createReparation = async(ReparationData) => {
    try {
        return await ReparationRepository.Reparations(ReparationData)
    } catch (error) {
        console.log(error);
    }
}
const getAllReparation = async() => {
    try {
        return await ReparationRepository.getAllReparation()
    } catch (error) {
        throw error
    }
}
module.exports = {createReparation, getAllReparation}