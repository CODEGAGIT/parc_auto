const Carburant = require("../Models/Carburant")
const CarburantServices = require("../Services/CarburantServices")

/**creer un vehicule**/
exports.createCarburant = async(req, res) => {
    try {
        const CarburantData = req.body
        console.log(CarburantData)
        const newCarburant = new Carburant(CarburantData)
        const carburant = newCarburant.save()
        res.status(201).json(carburant)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/


/**create update**/
exports.updateCarburant = async(req, res) => {
    const {carburantId} = req.params
    const{
       typeCAR,
       qte,
    } = req.body

    try {
        const carburant = await Carburant.findByIdAndUpdate(carburantId)
        console.log(carburant);
        if (!carburant) {
            return res.status(404).json({message: "carburant not exit"})
        }
        carburant.typeCAR = typeCAR,
        carburant.qte = qte,
            await carburant.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteCarburant = async (req, res) => {
    const {carburantId} = req.params
  
    try {
        const carburant = await Carburant.findByIdAndDelete(carburantId)
        console.log(carburant)
        if (!carburant) {
            return res.status(404).json({message: "user not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", carburant})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllCarburant = async (req, res) => {
    try {
        const Carburants = await CarburantServices.getAllCarburant()
        return res.status(201).json(Carburants)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}