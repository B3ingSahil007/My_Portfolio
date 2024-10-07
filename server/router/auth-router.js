const express = require('express')
const router = express.Router()
const { home, registeration, login, user } = require('../controllers/auth-controller')
const { signUpSchema, loginSchema } = require('../validators/auth-validator')
const validate = require('../middleware/validate-middleware')
const authMiddleware = require('../middleware/auth-middleware')

//^ Method 1
// router.get('/', (req, res) => {
//     res.status(200).send('Home Page 2 . . .')
// })

//^ Method 2 - - - Use This Method, Helpfull
router.route("/").get(
    home
)

router.route("/Registeration").post(
    validate(signUpSchema), registeration
)

// router.route("/login").get((req, res) => {
//     res.status(200).send('Login Page . . .')
// })
router.route("/Login").post(validate(loginSchema), login)
router.route("/user").get(authMiddleware, user)

module.exports = router;