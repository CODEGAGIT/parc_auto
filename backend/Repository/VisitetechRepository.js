const Visitetech = require('../Models/Visitetech')

//Creer une visitetechnique
const Visitetechs = async (VisitetechData) => {
    try {
        const newVisitetech = new Visitetech(VisitetechData)
        return await newVisitetech.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste **/
const getAllVisitetech = async() => {
    try {
        return await Visitetech.find()
    } catch (error) {
        throw error
    }
}
module.exports = {Visitetechs, getAllVisitetech}
