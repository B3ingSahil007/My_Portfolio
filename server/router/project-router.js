const express = require('express')
const router = express.Router()

const projects = require('../controllers/project-controllers')

router.route("/projects").get(projects)

module.exports = router;