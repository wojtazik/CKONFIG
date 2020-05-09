const express = require('express')
const carConfigController = require('../controller/carConfigController')

const router = express.Router()

router.get('/', carConfigController.getPossibleCarsOptions)

module.exports = router
