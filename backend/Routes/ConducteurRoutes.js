const express = require('express')
const router = express.Router()
const conducteurController = require('../Controllers/ConducteurController')

router.route('/create').post(conducteurController.createConducteur)
router.route('/getAllConducteur').get(conducteurController.getAllConducteur)
router.route('/update/:conducteurId').put(conducteurController.updateConducteur)
router.route('/delete/:conducteurId').delete(conducteurController.deleteConducteur)

module.exports = router