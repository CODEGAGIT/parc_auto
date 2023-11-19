const Reparation = require('../Models/Reparation')

//Creer une reparation
const Reparations = async (ReparationData) => {
    try {
        const newReparation = new Reparation(ReparationData)
        return await newReparation .save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllReparation = async() => {
    try {
        return await Reparation.find().populate("vehiculeId")
       
    } catch (error) {
        throw error
    }
}
module.exports = {Reparations, getAllReparation}
