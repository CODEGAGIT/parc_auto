const Vehicule = require("../Models/Vehicule")
const VehiculeServices = require("../Services/VehiculeServices")
//const ConducteurServices = require("../Services/ConducteurServices")

/**creer un vehicule**/
exports.createVehicule = async(req, res) => {
    try {
        const VehiculeData = req.body
        console.log(VehiculeData)
        const newVehicule = new Vehicule(VehiculeData)
        const vehicule = newVehicule.save()
        res.status(201).json(vehicule)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/

/**create update**/
exports.updateVehicule = async(req, res) => {
    const {vehiculeId} = req.params
    const{
       immatriculation,
       marqueId,
       model,
       chassis,
       typeVEH,
       puissance,
       moteur,
       carburantId,
       dateacquisition,
       datemisecirc,
       kilometrerev,
       kilometrepneu,
       departementId,
       /*asssuranceId,
       visiteTechId,
       reparationId,
       entretienId,*/


    } = req.body

    try {
        const vehicule = await Vehicule.findByIdAndUpdate(vehiculeId)
        console.log(vehicule);
        if (!vehicule) {
            return res.status(404).json({message: "vehicule not exit"})
        }
        vehicule.immatriculation = immatriculation,
        vehicule.marqueId = marqueId,
        vehicule.model = model,
        vehicule.chassis = chassis,
        vehicule.typeVEH = typeVEH,
        vehicule.puissance = puissance,
        vehicule.moteur = moteur,
        vehicule.carburantId = carburantId,
        vehicule.dateacquisition = dateacquisition,
        vehicule.datemisecirc = datemisecirc,
        vehicule.kilometrerev = kilometrerev,
        vehicule.kilometrepneu = kilometrepneu,
        vehicule.departementId = departementId
        
            await vehicule.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteVehicule = async (req, res) => {
    const {vehiculeId} = req.params
  
    try {
        const vehicule = await Vehicule.findByIdAndDelete(vehiculeId)
        console.log(vehicule)
        if (!vehicule) {
            return res.status(404).json({message: " not found"}) 
           
        }
        res.status(200).json({ message: " deleted successfully", vehicule  })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/
exports.getAllVehicule = async( req, res) => {
    try {
        const vehicules = await VehiculeServices.getAllVehicule()
        return res.status(201).json(vehicules)
    } catch (error) {
        return res.status(500).json({message: "error"})
    }
}
 