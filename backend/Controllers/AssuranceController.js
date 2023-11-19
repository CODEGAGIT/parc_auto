const Assurance = require("../Models/Assurance")
const AssuranceServices = require("../Services/AssuranceServices")

/**creer une assurance**/
exports.createAssurance = async(req, res) => {
    try {
        const AssuranceData = req.body
        console.log(AssuranceData)
        const newAssurance = new Assurance(AssuranceData)
        const assurance = newAssurance.save()
        res.status(201).json(assurance)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/

/**create read**/
exports.getallAssurance = async (req, res) => {
    try {
        const assurance = await Assurance.find()
        res.status(201).json(assurance)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }
}
/**end read**/

/**create update**/
exports.updateAssurance = async(req, res) => {
    const {assuranceId} = req.params
    const{
        nom,
        typeASS,
        compagnie,
        validite,
        datedebut,
    } = req.body

    try {
        const assurance = await Assurance.findByIdAndUpdate(assuranceId)
        console.log(assurance);
        if (!assurance) {
            return res.status(404).json({message: "assurance not exit"})
        }
        assurance.nom = nom,
        assurance.typeASS = typeASS,
        assurance.compagnie = compagnie,
        assurance.validite = validite,
        assurance.datedebut = datedebut,
            await assurance.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/

/**create delete**/
exports.deleteAssurance = async (req, res) => {
    const {assuranceId} = req.params
  
    try {
        const assurance = await Assurance.findByIdAndDelete(assuranceId)
        console.log(assurance)
        if (!assurance) {
            return res.status(404).json({message: "user not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", assurance})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/
exports.getAllAssurance = async (req, res) => {
    try {
        const assurance = await AssuranceServices.getAllAssurance()
        return res.status(201).json(assurance)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}
 