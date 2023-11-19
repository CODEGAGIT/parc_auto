const RoleRepository = require("../Repository/RoleRepository")

//creer un Role
const createRole = async(RoleData) => {
    try {
        return await RoleRepository.Roles(RoleData)
    } catch (error) {
        console.log(error);
    }
}
const getAllRole = async() => {
    try {
        return await RoleRepository.getAllRole()
    } catch (error) {
        throw error
    }
}
module.exports = {createRole, getAllRole}