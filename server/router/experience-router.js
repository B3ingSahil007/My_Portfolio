const express = require('express')
const router = express.Router()

const { experience, addExperience } = require('../controllers/experience-controllers')

router.route("/experience").get(experience)

router.route("/allexperience").post(addExperience)

module.exports = router;