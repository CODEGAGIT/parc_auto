const ConducteurRepository = require("../Repository/ConducteurRepository")

//creer un conducteur
const createConducteur = async(ConducteurData) => {
    try {
        return await ConducteurRepository.Conducteur(ConducteurData)
    } catch (error) {
        console.log(error);
    }
}
const getAllConducteur = async() => {
    try {
        return await ConducteurRepository.getAllConducteur()
    } catch (error) {
        throw error
    }
}
module.exports = {createConducteur, getAllConducteur}