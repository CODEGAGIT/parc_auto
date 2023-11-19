const express = require('express')
const router = express.Router()
const reparationController = require('../Controllers/ReparationController')

router.route('/create').post(reparationController.createReparation)
router.route('/getAllReparation').get(reparationController.getAllReparation)
router.route('/update/:reparationId').put(reparationController.updateReparation)
router.route('/delete/:reparationId').delete(reparationController.deleteReparation)

module.exports = router
