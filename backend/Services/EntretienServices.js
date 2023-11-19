const EntretienRepository = require("../Repository/EntretienRepository")

//creer un entretien
const createEntretien = async(EntretienData) => {
    try {
        return await EntretienRepository.Entretiens(EntretienData)
    } catch (error) {
        console.log(error);
    }
}
const getAllEntretien = async() => {
    try {
        return await EntretienRepository.getAllEntretien()
    } catch (error) {
        throw error
    }
}
module.exports = {createEntretien, getAllEntretien}