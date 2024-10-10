const express = require('express')
const router = express.Router()

const { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactsById } = require('../controllers/admin-controllers')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')

router.route('/allusers').get(authMiddleware, adminMiddleware, getAllUsers)
router.route('/allusers/:id').get(authMiddleware, adminMiddleware, getUserById)
router.route('/allusers/update/:id').patch(authMiddleware, adminMiddleware, updateUserById)
router.route('/allusers/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById)
router.route('/allcontacts').get(authMiddleware, getAllContacts)
router.route('/allcontacts/delete/:id').delete(authMiddleware, adminMiddleware, deleteContactsById)

module.exports = router;