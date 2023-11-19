const Assurance = require('../Models/Assurance')

//Creer une assurance
const assurances = async (AssuranceData) => {
    try {
        const newAssurance = new Assurance(AssuranceData)
        return await newAssurance.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllAssurance = async () => {
    try {
        return await Assurance.find();
    } catch (error) {
        throw error
    }
}
module.exports = {assurances, getAllAssurance}
