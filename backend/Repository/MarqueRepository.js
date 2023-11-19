const Marque = require('../Models/Marque')

//Creer un Marque
const Marques = async (MarqueData) => {
    try {
        const newMarque = new Marque(MarqueData)
        return await newMarque.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllMarque = async() => {
    try {
        return await Marque.find()
    } catch (error) {
        throw error
    }
}
module.exports = {Marques, getAllMarque}
