const express = require('express')
const router = express.Router()

const contactForm = require('../controllers/contact-controllers')

router.route("/contact").post(contactForm)

module.exports = router;

// technologies, id, title, description, image
// web development, frontend development, web design, fullstack development (basic)