const express = require('express')
const router = express.Router()

const { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactsById, projectUpload, experienceUpload, deleteProjectById, getAllProject, updateProjectById, getProjectById, getAllExperience, deleteExperienceById } = require('../controllers/admin-controllers')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')

router.route('/allusers').get(authMiddleware, adminMiddleware, getAllUsers)
router.route('/allusers/:id').get(authMiddleware, adminMiddleware, getUserById)
router.route('/allusers/update/:id').patch(authMiddleware, adminMiddleware, updateUserById)
router.route('/allusers/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById)
router.route('/allcontacts').get(authMiddleware, adminMiddleware, getAllContacts)
router.route('/allcontacts/delete/:id').delete(authMiddleware, adminMiddleware, deleteContactsById)
router.route('/addprojects').post(authMiddleware, adminMiddleware, projectUpload)
router.route('/addexperience').post(authMiddleware, adminMiddleware, experienceUpload)
router.route('/allprojects').get(authMiddleware, adminMiddleware, getAllProject)
router.route('/allprojects/:id').get(authMiddleware, adminMiddleware, getProjectById)
router.route('/allprojects/delete/:id').delete(authMiddleware, adminMiddleware, deleteProjectById)
router.route('/allprojects/update/:id').patch(authMiddleware, adminMiddleware, updateProjectById)
router.route('/allexperience').get(authMiddleware, adminMiddleware, getAllExperience)
router.route('/allexperience/delete/:id').delete(authMiddleware, adminMiddleware, deleteExperienceById)
// http://localhost:5000/api/data/projects

module.exports = router;