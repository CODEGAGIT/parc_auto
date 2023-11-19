const Marque = require("../Models/Marque")
const MarqueServices = require("../Services/MarqueServices")

/**creer**/
exports.createMarque = async(req, res) => {
    try {
        const MarqueData = req.body
        console.log(MarqueData)
        const newMarque = new Marque(MarqueData)
        const marque = newMarque.save()
        res.status(201).json(marque)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/


/**create update**/
exports.updateMarque = async(req, res) => {
    const {marqueId} = req.params
    const{
       nom
    } = req.body

    try {
        const marque = await Marque.findByIdAndUpdate(marqueId)
        console.log(marque);
        if (!marque) {
            return res.status(404).json({message: " not exit"})
        }
        marque.nom = nom,
            await marque.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteMarque = async (req, res) => {
    const {marqueId} = req.params
  
    try {
        const marque = await Marque.findByIdAndDelete(marqueId)
        console.log(marque)
        if (!marque) {
            return res.status(404).json({message: " not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", marque})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllMarque = async (req, res) => {
    try {
        const Marques = await MarqueServices.getAllMarque()
        return res.status(201).json(Marques)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}