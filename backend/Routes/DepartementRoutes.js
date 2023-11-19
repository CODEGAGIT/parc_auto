const express = require('express')
const router = express.Router()
const departementController = require('../Controllers/DepartementController')

router.route('/create').post(departementController.createDepartement)
router.route('/getAllDepartement').get(departementController.getAllDepartement)
router.route('/update/:departementId').put(departementController.updateDepartement)
router.route('/delete/:departementId').delete(departementController.deleteDepartement)

module.exports = router