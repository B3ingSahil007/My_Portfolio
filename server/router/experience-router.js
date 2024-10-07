const express = require('express')
const router = express.Router()

const experience = require('../controllers/experience-controllers')

router.route("/experience").get(experience)

module.exports = router;