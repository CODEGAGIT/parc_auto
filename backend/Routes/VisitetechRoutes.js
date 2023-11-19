const express = require('express')
const router = express.Router()
const visitetechController = require('../Controllers/VisitetechController')

router.route('/create').post(visitetechController.createVisitetech)
router.route('/getAllVisitetech').get(visitetechController.getAllVisitetech)
router.route('/update/:visitetechId').put(visitetechController.updateVisitetech)
router.route('/delete/:visitetechId').delete(visitetechController.deleteVisitetech)

module.exports = router