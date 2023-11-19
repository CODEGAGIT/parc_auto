const express = require('express')
const router = express.Router()
const garageController = require('../Controllers/GarageController')

router.route('/create').post(garageController.createGarage)
router.route('/getallgarage').get(garageController.getallgarages)
router.route('/update/:garageId').put(garageController.updateGarage)
router.route('/delete/:garageId').delete(garageController.deleteGarage)

module.exports = router
