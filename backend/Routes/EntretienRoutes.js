const express = require('express')
const router = express.Router()
const entretienController = require('../Controllers/EntretienController')

router.route('/create').post(entretienController.createEntretien)
router.route('/getAllEntretien').get(entretienController.getAllEntretien)
router.route('/update/:entretienId').put(entretienController.updateEntretien)
router.route('/delete/:entretienId').delete(entretienController.deleteEntretien)

module.exports = router
