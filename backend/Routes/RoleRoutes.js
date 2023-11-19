const express = require('express')
const router = express.Router()
const roleController = require('../Controllers/RoleController')

router.route('/create').post(roleController.createRole)
router.route('/getAllRole').get(roleController.getAllRole)
router.route('/update/:roleId').put(roleController.updateRole)
router.route('/delete/:roleId').delete(roleController.deleteRole)

module.exports = router
