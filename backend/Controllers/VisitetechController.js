const Visitetech = require("../Models/Visitetech")
const VisiteServices = require("../Services/VisitetechServices")

/**creer une visite technique**/
exports.createVisitetech = async(req, res) => {
    try {
        const VisitetechData = req.body
        console.log(VisitetechData)
        const newVisitetech = new Visitetech(VisitetechData)
        const visitetech = newVisitetech.save()
        res.status(201).json(visitetech)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/



/**create update**/
exports.updateVisitetech = async(req, res) => {
    const {visitetechId} = req.params
    const{
        validite,
        datedebut,
    } = req.body

    try {
        const visitetech = await Visitetech.findByIdAndUpdate(visitetechId)
        console.log(visitetech);
        if (!visitetech) {
            return res.status(404).json({message: "visitetechnique not exit"})
        }
        visitetech.validite = validite,
        visitetech.datedebut = datedebut,
            await visitetech.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/

/**create delete**/
exports.deleteVisitetech = async (req, res) => {
    const {visitetechId} = req.params
  
    try {
        const visitetech = await Visitetech.findByIdAndDelete(visitetechId)
        console.log(visitetech)
        if (!visitetech) {
            return res.status(404).json({message: " not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", visitetech})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllVisitetech = async(req, res) => {
    try {
        const visite = await VisiteServices.getAllVisitetech()
        return res.status(201).json(visite)
    } catch (error) {
        return res.status(500).json({message: "error"})
    }
} 