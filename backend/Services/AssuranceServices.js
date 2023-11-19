const AssuranceRepository = require("../Repository/AssuranceRepository")

//creer une assurance
const createAssurance = async(AssuranceData) => {
    try {
        return await AssuranceRepository.assurances(AssuranceData)
    } catch (error) {
        console.log(error);
    }
}

/**obtenir la liste */
const getAllAssurance = async () => {
    try {
        return await AssuranceRepository.getAllAssurance()
    } catch (error) {
        throw error
    }
}
module.exports = {createAssurance, getAllAssurance}
