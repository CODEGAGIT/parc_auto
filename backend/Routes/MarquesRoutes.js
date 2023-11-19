const express = require('express')
const router = express.Router()
const MarqueController = require('../Controllers/MarqueController')

router.route('/create').post(MarqueController.createMarque)
router.route('/getAllMarque').get(MarqueController.getAllMarque)
router.route('/update/:marqueId').put(MarqueController.updateMarque)
router.route('/delete/:marqueId').delete(MarqueController.deleteMarque)

module.exports = router
