const express = require('express')
const router = express.Router()

const { 
    getAllUsers,
    getAllContacts,
    getAllProject,
    getAllExperience,
    getAllService,

    getUserById,
    getProjectById,
    getExperienceById,
    getServiceById,

    updateUserById,
    updateProjectById,
    updateExperienceById,
    updateServiceById,

    deleteUserById,
    deleteContactsById,
    deleteProjectById,
    deleteExperienceById,
    deleteServiceById,

    projectUpload,
    experienceUpload,
    serviceUpload,
} = require('../controllers/admin-controllers')

const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')

/* 
  ============================
  🔥 GET ALL 🔥
  ============================
*/

router.route('/allusers').get(authMiddleware, adminMiddleware, getAllUsers)
router.route('/allcontacts').get(authMiddleware, adminMiddleware, getAllContacts)
router.route('/allprojects').get(authMiddleware, adminMiddleware, getAllProject)
router.route('/allexperience').get(authMiddleware, adminMiddleware, getAllExperience)
router.route('/allservice').get(authMiddleware, adminMiddleware, getAllService)

/* 
  ============================
  🔥 GET ONE BY ID 🔥
  ============================
*/

router.route('/allusers/:id').get(authMiddleware, adminMiddleware, getUserById)
router.route('/allprojects/:id').get(authMiddleware, adminMiddleware, getProjectById)
router.route('/allexperience/:id').get(authMiddleware, adminMiddleware, getExperienceById)
router.route('/allservice/:id').get(authMiddleware, adminMiddleware, getServiceById)
/* 
  ============================
  🔥 UPDATE ONE BY ID 🔥
  ============================
*/

router.route('/allusers/update/:id').patch(authMiddleware, adminMiddleware, updateUserById)
router.route('/allprojects/update/:id').patch(authMiddleware, adminMiddleware, updateProjectById)
router.route('/allexperience/update/:id').patch(authMiddleware, adminMiddleware, updateExperienceById)
router.route('/allservice/update/:id').patch(authMiddleware, adminMiddleware, updateServiceById)

/* 
  ============================
  🔥 DELETE ONE BY ID 🔥
  ============================
*/
router.route('/allusers/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById)
router.route('/allcontacts/delete/:id').delete(authMiddleware, adminMiddleware, deleteContactsById)
router.route('/allprojects/delete/:id').delete(authMiddleware, adminMiddleware, deleteProjectById)
router.route('/allexperience/delete/:id').delete(authMiddleware, adminMiddleware, deleteExperienceById)
router.route('/allservice/delete/:id').delete(authMiddleware, adminMiddleware, deleteServiceById)

/* 
  ============================
  🔥 POST 🔥
  ============================
*/
router.route('/addprojects').post(authMiddleware, adminMiddleware, projectUpload)
router.route('/addexperience').post(authMiddleware, adminMiddleware, experienceUpload)
router.route('/addservice').post(authMiddleware, adminMiddleware, serviceUpload)

// http://localhost:5000/api/data/projects

module.exports = router;