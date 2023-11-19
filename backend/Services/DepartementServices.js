const DepartementRepository = require("../Repository/DepartementRepository")

//creer un departement
const createDepartement = async(DepartementData) => {
    try {
        return await DepartementRepository.Departements(DepartementData)
    } catch (error) {
        console.log(error);
    }
}
const getAllDepartement = async() => {
    try {
        return await DepartementRepository.getAllDepartement()
    } catch (error) {
        throw error
    }
}
module.exports = {createDepartement, getAllDepartement}