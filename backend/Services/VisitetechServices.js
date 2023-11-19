const VisitetechRepository = require("../Repository/VisitetechRepository")

//creer une visitetechnique
const createVisitetech = async(VisitetechData) => {
    try {
        return await VisitetechRepository.Visitetechs(VisitetechData)
    } catch (error) {
        console.log(error);
    }
}

const getAllVisitetech = async () => {
    try {
        return await VisitetechRepository.getAllVisitetech()
    } catch (error) {
        throw error
    }
}

module.exports = {createVisitetech, getAllVisitetech}