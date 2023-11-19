const Vehicule = require('../Models/Vehicule')

//Creer un vehicule
const vehicule = async (VehiculeData) => {
    try {
        const newVehicule = new vehicule(VehiculeData)
        return await newVehicule.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllVehicule = async () =>{
    try {
        return await Vehicule.find()
        .populate("marqueId") 
        .populate("carburantId")  
        .populate("departementId") 
        

    } catch (error) {
        throw error
    }
}
module.exports = {Vehicule, getAllVehicule}
