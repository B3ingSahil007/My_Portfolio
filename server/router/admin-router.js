const express = require('express')
const router = express.Router()

const { getAllUsers, getAllContacts } = require('../controllers/admin-controllers')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')

router.route('/allusers').get(authMiddleware, adminMiddleware, getAllUsers)
router.route('/allcontacts').get(authMiddleware, getAllContacts)

module.exports = router;