const Entretien = require('../Models/Entretien')

//Creer un entretien
const Entretiens = async (EntretienData) => {
    try {
        const newEntretien = new Entretien(EntretienData)
        return await newEntretien.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllEntretien = async() => {
    try {
        return await Entretien.find().populate("vehiculeId")
    } catch (error) {
        throw error
    }
}
module.exports = {Entretiens, getAllEntretien}
