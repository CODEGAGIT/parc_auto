const Departement = require('../Models/Departement')

//Creer un departement
const Departements = async (DepartementData) => {
    try {
        const newDepartement = new Departement(DepartementData)
        return await newDepartement.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllDepartement = async() => {
    try {
        return await Departement.find()
    } catch (error) {
        throw error
    }
}
module.exports = {Departements, getAllDepartement}
