const express = require('express');
const router = express.Router()
const controller = require('../controllers/mainController')
const mainValidator = require("../validators/mainValidatror")
const recordarCookie = require('../validators/recordarCookie')

router.get('/', recordarCookie, controller.main)
router.post('/', mainValidator, recordarCookie, controller.userData)
router.get('/user', controller.user)
router.get('/olvidar', controller.olvidar)

module.exports = router
