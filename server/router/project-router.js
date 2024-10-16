const express = require('express')
const router = express.Router()

const { projects, addProject } = require('../controllers/project-controllers')

router.route("/projects").get(projects)

router.route("/allprojects").post(addProject)

module.exports = router;