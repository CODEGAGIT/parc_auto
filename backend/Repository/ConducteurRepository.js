const Conducteur = require('../Models/Conducteur')

//Creer un conducteur
const conducteur = async (ConducteurData) => {
    try {
        const newConducteur = new conducteur(ConducteurData)
        return await newConducteur.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllConducteur = async() => {

    try {
        return await Conducteur.find().populate("vehiculeId")
       
    } catch (error) {
        throw error
    }
}
module.exports = {Conducteur, getAllConducteur}
