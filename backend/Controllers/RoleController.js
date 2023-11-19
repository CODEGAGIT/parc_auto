const Role = require("../Models/Role")
const RoleServices = require("../Services/RoleServices")

exports.createRole = async(req, res) => {

    try {
        const RoleData = req.body
        console.log(RoleData)
        const newRole = new Role(RoleData)
        const role = await newRole.save()
        res.status(201).json(role)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"}) 
    }
}
/* end create*/

/**create update**/
exports.updateRole = async(req, res) => {
    const {roleId} = req.params
    const{
       libelle,
       
    } = req.body

    try {
        const role = await Role.findByIdAndUpdate(roleId)
        console.log(role);
        if (!role) {
            return res.status(404).json({message: " not exit"})
        }
        role.libelle = libelle,
        
            await role.save()
        res.status(201).json({message: "mise a jour effectuer"})    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "update error"})
    }
}
/**fin update**/
/**create delete**/
exports.deleteRole = async (req, res) => {
    const {roleId} = req.params


    try {
        const role = await Role.findByIdAndDelete(roleId)
        console.log(role)
        if (!role) {
            return res.status(404).json({message: " not found"}) 
        }
        res.status(200).json({ message: " deleted successfully", Role})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllRole = async (req, res) => {
    try {
        const Roles = await RoleServices.getAllRole()
        return res.status(201).json(Roles)
    } catch (error) {
        return res.status(500).json({message: "error"})
   }
}

