const Garage = require("../Models/Garage")
const GarageServices = require("../Services/GarageServices")


/**creer un garage**/
exports.createGarage = async(req, res) => {
    try {
        const GarageData = req.body
        console.log(GarageData)
        const newGarage = new Garage(GarageData)
        const garage = newGarage.save()
        res.status(201).json(garage)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/

/**create update**/
exports.updateGarage = async(req, res) => {
    const {garageId} = req.params
    const{
        nom,
        typeGAR,
        addresse,
        contact,
    } = req.body

    try {
        const garage =await Garage.findByIdAndUpdate(garageId)
        console.log(garage);
        if (!garage) {
            return res.status(404).json({message: "garage not exit"})
        }
        garage.nom = nom,
        garage.typeGAR = typeGAR,
        garage.addresse = addresse,
        garage.contact = contact
            await garage.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteGarage = async (req, res) => {
    const {garageId} = req.params
  
    try {
        const garage = await Garage.findByIdAndDelete(garageId)
        console.log(garage)
        if (!garage) {
            return res.status(404).json({message: "garage not found"}) 
        }
        res.status(200).json({ message: "deleted successfully", garage})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

/**obtenir la liste des garages*/
exports.getallgarages = async (req, res) => {
    try {
        const garage = await GarageServices.getAllGarage()
        return res.status(201).json(garage)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}
   

 