const express = require('express')
const router = express.Router()
const affectVDController = require('../Controllers/AffectVDController')

router.route('/create').post(affectVDController.createAffect)
router.route('/getAllAffect').get(affectVDController.getAllAffect)
router.route('/delete/:affectId').delete(affectVDController.deleteAffect)

module.exports = router