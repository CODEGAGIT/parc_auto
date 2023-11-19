const express = require('express')
const router = express.Router()
const userController = require('../Controllers/UserController')


router.route('/Login').post(userController.loginUser)
router.route('/create').post(userController.createUser)
router.route('/getAllUser').get(userController.getAllUser)
router.route('/update/:userId').put(userController.updateUser)
router.route('/delete/:userId').delete(userController.deleteUser)


module.exports = router