const express = require('express')
const router = express.Router()
const carburantController = require('../Controllers/CarburantController')

router.route('/create').post(carburantController.createCarburant)
router.route('/getAllCarburant').get(carburantController.getAllCarburant)
router.route('/update/:carburantId').put(carburantController.updateCarburant)
router.route('/delete/:carburantId').delete(carburantController.deleteCarburant)

module.exports = router