const Entretien = require("../Models/Entretien")
const EntretienServices = require("../Services/EntretienServices")

/**creer un entretien  **/
exports.createEntretien = async(req, res) => {
    try {
        const EntretienData = req.body
        console.log(EntretienData)
        const newEntretien = new Entretien(EntretienData)
        const entretien = newEntretien.save()
        res.status(201).json(entretien)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/


/**create update**/
exports.updateEntretien = async(req, res) => {
    const {entretienId} = req.params
    const{
       typeENT,
       motifENT,
       montant,
       vehiculeId,
    } = req.body

    try {
        const entretien = await Entretien.findByIdAndUpdate(entretienId)
        console.log(entretien);
        if (!entretien) {
            return res.status(404).json({message: "not exit"})
        }
        entretien.typeENT = typeENT,
        entretien.motifENT = motifENT,
        entretien.montant = montant,
        entretien.vehiculeId = vehiculeId,
            await entretien.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteEntretien = async (req, res) => {
    const {entretienId} = req.params
  
    try {
        const entretien = await Entretien.findByIdAndDelete(entretienId)
        console.log(entretien)
        if (!entretien) {
            return res.status(404).json({message: "not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", entretien})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/
/**obtenir la liste*/
exports.getAllEntretien = async (req, res) => {
    try {
        const Entretien = await EntretienServices.getAllEntretien()
        return res.status(201).json(Entretien)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}