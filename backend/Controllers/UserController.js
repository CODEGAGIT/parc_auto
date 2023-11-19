const User = require("../Models/User")

const bcrypt = require("bcrypt")
const UserServices = require('../Services/UserServices')

exports.loginUser = async (req, res) => {

    try {
    
        const {nom, password} = req.body

        const findUser = await User.findOne({nom: nom})
       
        if (!findUser) {
           return res.status(404).json({message: "cet utilisateur n'existe pas"})
        }
       
        const dicode = await bcrypt.compare(password, findUser.password )

        if (!dicode) {
            return res.status(404).json({message: "incorrect"})
        }
        
        return res.json({
            id: findUser._id,
            role: findUser.role
        } )


    } catch (error) {
        console.log('error', error);
    }


    
} 

exports.createUser = async(req, res) => {
    try {
        const userData = req.body

        console.log("userData", req.body);
        if (!userData || !userData.password){
            return res.status(400).json({error: "mot de passe incorrect"})
        }
        
        const saltRounds= 10
        const hashedpassword = await bcrypt.hash(userData.password, saltRounds)

        userData.password = hashedpassword

        const newUser = new User(userData)
        const user = await newUser.save()
 
        
        res.status(201).json(user)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }
}

/**create le update */
exports.updateUser = async (req, res) => {
    const {userId} = req.params
    const{
        nom,
        email,
        roleId,
        password,
      
    } = req.body

    try {
        const user = await User.findById(userId)
        console.log(user)
        if (!user) {
            return res.status(404).json({message: "user not exist"})  
        }
        user.nom = nom,
        user.email = email,
        user.roleId = roleId
            if (password) {
                const saltRounds= 10
                const hashedpassword = await bcrypt.hash(password, saltRounds)
                user.password = hashedpassword
            }
            await user.save()

            res.status(201).json({message: "mise a jour"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error de mise jour"})
    }
}
/**fin du update**/
/**create delete**/
exports.deleteUser = async (req, res) => {
    const {userId} = req.params
  
    try {
        const user = await User.findByIdAndDelete(userId)
        console.log(user)
        if (!user) {
            return res.status(404).json({message: "user not found"}) 
        }
        res.status(200).json({ message: "User deleted successfully", user})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error"})
    }
}

/**fin de delete**/

exports.getAllUser = async(req, res) =>{
    try {
        const user = await UserServices.getAllUser()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message: "error"})
    }
}
