const UserRepository = require("../Repository/UserRepository")

const createUser = async (UserData) => {
    try {
        return  await UserRepository.User(UserData)
    } catch (error) {
     console.error(error);   
    }
}

const getAllUser = async () => {
    try {
        return await UserRepository.getAllUser()
    } catch (error) {
        throw error
    }
}

module.exports = {createUser, getAllUser}