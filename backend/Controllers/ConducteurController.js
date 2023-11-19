const Conducteur = require("../Models/Conducteur")
const ConducteurServices = require("../Services/ConducteurServices")

/**creer un conducteur**/
exports.createConducteur = async(req, res) => {
    try {
        const ConducteurData = req.body
        console.log(ConducteurData)
        const newConducteur = new Conducteur(ConducteurData)
        const conducteur = newConducteur.save()

        res.status(201).json(conducteur)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}

/* end create*/

/**create update**/
exports.updateConducteur = async(req, res) => {
    const {conducteurId} = req.params
    const{
        nom,
        categorie,
        addresse,
        contact,
        vehiculeId,
    } = req.body

    try {
        const conducteur =await Conducteur.findByIdAndUpdate(conducteurId)
        console.log(conducteur);
        if (!conducteur) {
            return res.status(404).json({message: "conducteur not exit"})
        }
        conducteur.nom = nom,
        conducteur.categorie = categorie,
        conducteur.addresse = addresse,
        conducteur.contact = contact,
        conducteur.vehiculeId = vehiculeId
            await conducteur.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/

/**create delete**/
exports.deleteConducteur = async (req, res) => {
    const {conducteurId} = req.params
  
    try {
        const conducteur = await Conducteur.findByIdAndDelete(conducteurId)
        console.log(conducteur)
        if (!conducteur) {
            return res.status(404).json({message: " not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", conducteur})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/
exports.getAllConducteur = async(req, res) =>{
    try {
        const conducteur = await ConducteurServices.getAllConducteur()
        return res.status(201).json(conducteur)
    } catch (error) {
        return res.status(500).json({message:"error"})
    }
}
 
