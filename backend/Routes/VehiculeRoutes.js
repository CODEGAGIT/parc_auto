const express = require('express')
const router = express.Router()
const vehiculeController = require('../Controllers/VehiculeController')

router.route('/Create').post(vehiculeController.createVehicule)
router.route('/getAllVehicule').get(vehiculeController.getAllVehicule)
router.route('/update/:vehiculeId').put(vehiculeController.updateVehicule)
router.route('/delete/:vehiculeId').delete(vehiculeController.deleteVehicule)

module.exports = router