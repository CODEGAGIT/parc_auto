const User = require('../Models/User')

//creer un user
const user = async(UserData) => {
    try {
        const newUser = new user(UserData)
        return await newUser.save()

    } catch (error) {
        throw error
    }
}
//fin de la creation

const getAllUser = async () => {
    try {
        return await User.find().populate("roleId")
        
    } catch (error) {
        throw error
    }
}
 

module.exports = {
    User,
    getAllUser
}
