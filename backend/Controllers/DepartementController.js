const Departement = require("../Models/Departement")
const DepartementServices = require("../Services/DepartementServices")

/**creer un vehicule**/
exports.createDepartement = async(req, res) => {
    try {
        const DepartementData = req.body
        console.log(DepartementData)
        const newDepartement = new Departement(DepartementData)
        const departement = newDepartement.save()
        res.status(201).json(departement)
       /*  if (!req.body === ) {
            
        } */
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/


/**create update**/
exports.updateDepartement = async(req, res) => {
    const {departementId} = req.params
    const{
       nom,
       service,
    } = req.body

    try {
        const departement = await Departement.findByIdAndUpdate(departementId)
        console.log(departement);
        if (!departement) {
            return res.status(404).json({message: " not exit"})
        }
        departement.nom = nom,
        departement.service = service,
            await departement.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteDepartement = async (req, res) => {
    const {departementId} = req.params
  
    try {
        const departement = await Departement.findByIdAndDelete(departementId)
        console.log(departement)
        if (!departement) {
            return res.status(404).json({message: " not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", departement})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllDepartement = async (req, res) => {
    try {
        const Departements = await DepartementServices.getAllDepartement()
        return res.status(201).json(Departements)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}