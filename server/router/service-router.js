const express = require('express')
const router = express.Router()

const {services, addService} = require('../controllers/service-controllers')

router.route("/service").get(services)

router.route("/allservice").post(addService)

module.exports = router;