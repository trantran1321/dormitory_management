const express = require('express')
const router = express.Router()

const sitesController = require('../app/controller/SitesController')

router.get('/thu-tuc' ,sitesController.procedureShow)
router.get('/gia-ca' ,sitesController.priceListShow)
router.get('/lien-lac' ,sitesController.contactShow)
router.use('/', sitesController.index)

module.exports = router

