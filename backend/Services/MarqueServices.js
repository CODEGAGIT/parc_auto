const MarqueRepository = require("../Repository/MarqueRepository")

//creer un Marque
const createMarque = async(MarqueData) => {
    try {
        return await MarqueRepository.Marques(MarqueData)
    } catch (error) {
        console.log(error);
    }
}
const getAllMarque = async() => {
    try {
        return await MarqueRepository.getAllMarque()
    } catch (error) {
        throw error
    }
}
module.exports = {createMarque, getAllMarque}