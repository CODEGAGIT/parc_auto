const AffectRepository = require("../Repository/AffectVDRepository")

//creer un Affect
const createAffect = async(AffectData) => {
    try {
        return await AffectRepository.Affects(AffectData)
    } catch (error) {
        console.log(error);
    }
}
const getAllAffect = async() => {
    try {
        return await AffectRepository.getAllAffect()
    } catch (error) {
        throw error
    }
}
module.exports = {createAffect, getAllAffect}