const Affect = require('../Models/AffectVehDep')

//Creer un affect
const Affects = async (AffectData) => {
    try {
        const newAffect = new Affect(AffectData)
        return await newAffect.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllAffect = async() => {

    try {
        return await Affect.find()
       .populate("vehiculeimmatriculation")
       .populate("departementnom")

       
    } catch (error) {
        throw error
    }
}
module.exports = {Affects, getAllAffect}
