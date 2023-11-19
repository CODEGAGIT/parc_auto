const Role = require('../Models/Role')

//Creer un Role
const Roles = async (RoleData) => {
    try {
        const newRole = new Role(RoleData)
        return await newRole.save()
    } catch (error) {
        throw error
    }
}

/**obtenir la liste**/
const getAllRole = async() => {
    try {
        return await Role.find()
    } catch (error) {
        throw error
    }
}
module.exports = {Roles, getAllRole}
