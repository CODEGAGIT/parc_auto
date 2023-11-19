const Reparation = require("../Models/Reparation")
const ReparationServices = require("../Services/ReparationServices")

/**creer une reparation**/
exports.createReparation = async(req, res) => {
    try {
        const ReparationData = req.body
        console.log(ReparationData)
        const newReparation = new Reparation(ReparationData)
        const reparation = newReparation.save()
        res.status(201).json(reparation)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/


/**create update**/
exports.updateReparation = async(req, res) => {
    const {reparationId} = req.params
    const{
       typeREP,
       motifREP,
       montant,
       date,
       vehiculeId,
    } = req.body

    try {
        const reparation = await Reparation.findByIdAndUpdate(reparationId)
        console.log(reparation);
        if (!reparation) {
            return res.status(404).json({message: "not exit"})
        }
        reparation.typeREP =typeREP ,
        reparation.motifREP = motifREP,
        reparation.montant = montant,
        reparation.date = date,
        reparation.vehiculeId = vehiculeId,
            await reparation.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteReparation = async (req, res) => {
    const {reparationId} = req.params
  
    try {
        const reparation = await Reparation.findByIdAndDelete(reparationId)
        console.log(reparation)
        if (!reparation) {
            return res.status(404).json({message: "not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", reparation})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllReparation = async (req, res) => {
    try {
        const Reparations = await ReparationServices.getAllReparation()
        return res.status(201).json(Reparations)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}