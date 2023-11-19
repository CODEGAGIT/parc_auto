const Affect = require("../Models/AffectVehDep")
const AffectServices = require("../Services/AffectVDService")

//Faire une affectation
exports.createAffect = async(req, res) => {
    try {
        const AffectData = req.body
        console.log(AffectData)
        const newAffect = new Affect(AffectData)
        const affect = newAffect.save()

        res.status(201).json(affect)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}

// afficher les affectations
exports.getAllAffect = async(req, res) => {
    try {
        const Affecte = await AffectServices.getAllAffect()
        return res.status(201).json(Affecte)
    } catch (error) {
        return res.status(500).json({message:"error"})
    }
}

exports.deleteAffect = async (req, res) => {
    const {affectId} = req.params
  
    try {
        const affect = await Affect.findByIdAndDelete(affectId)
        console.log(affect)
        if (!affect) {
            return res.status(404).json({message: " not found"}) 
        }
        res.status(200).json({ message: "deleted successfully", affect})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}
