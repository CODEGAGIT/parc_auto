const express = require('express')
const router = express.Router()
const assuranceController = require('../Controllers/AssuranceController')

router.route('/create').post(assuranceController.createAssurance)
router.route('/getAllAssurance').get(assuranceController.getAllAssurance)
router.route('/update/:assuranceId').put(assuranceController.updateAssurance)
router.route('/delete/:assuranceId').delete(assuranceController.deleteAssurance)

module.exports = router
