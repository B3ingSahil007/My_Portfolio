const AllUsers = require('../models/user-model')
const AllContacts = require('../models/contact-model')
const AllProjects = require('../models/projects-model')
const AllExperience = require('../models/experience-model')
const AllService = require('../models/services-model')

/* 
  ============================
  🔥 Get All 🔥
  ============================
*/

const getAllUsers = async (req, res) => {
    try {
        //^ To Get All Users Data
        // const users = await AllUsers.find()

        //^ To Get All Users Data Except Password Or Any
        const users = await AllUsers.find({}, { password: 0, hashpassword: 0 })
        console.log(users);

        if (!users || !users.length === 0) {
            return res.status(404).json({ msg: "Users Not Found" })
        }

        return res.status(200).json(users)
    } catch (error) {
        console.log(`Admin All Users : ${error}`);
        // next(error)
    }
}

const getAllContacts = async (req, res) => {
    try {
        //^ To Get All Users Data
        const contacts = await AllContacts.find()
        console.log(contacts);

        if (!contacts || !contacts.length === 0) {
            return res.status(404).json({ msg: "Contacts Not Found" })
        }

        return res.status(200).json(contacts)
    } catch (error) {
        next("Admin All Contacts", error)
        // console.log(`Admin All Contacts : ${error}`);
    }
}

const getAllProject = async (req, res) => {
    try {
        const project = await AllProjects.find()
        // console.log(project);

        if (!project || !project.length === 0) {
            return res.status(404).json({ msg: "Project Not Found" })
        }

        return res.status(200).json(project)
    } catch (error) {
        next("Admin All Project", error)
    }
}

const getAllExperience = async (req, res) => {
    try {
        const experience = await AllExperience.find()
        // console.log(experience);

        if (!experience || !experience.length === 0) {
            return res.status(404).json({ msg: "Experience Not Found" })
        }

        return res.status(200).json(experience)
    } catch (error) {
        next("Admin All Experience", error)
    }
}

const getAllService = async (req, res) => {
    try {
        const service = await AllService.find()
        // console.log(experience);

        if (!service || !service.length === 0) {
            return res.status(404).json({ msg: "Experience Not Found" })
        }

        return res.status(200).json(service)
    } catch (error) {
        next("Admin All Experience", error)
    }
}

/* 
============================
🔥 Upload 🔥
============================
*/

const projectUpload = async (req, res) => {
    try {
        const response = req.body;
        await AllProjects.create(response)
        return res.status(200).json({ msg: "Project Uploaded Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Project Not Uploaded . . ." })
    }
}

const experienceUpload = async (req, res) => {
    try {
        const response = req.body;
        await AllExperience.create(response)
        return res.status(200).json({ msg: "Experience Uploaded Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Experience Not Uploaded . . ." })
    }
}

const serviceUpload = async (req, res) => {
    try {
        const response = req.body;
        await AllService.create(response)
        return res.status(200).json({ msg: "Service Uploaded Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Service Not Uploaded . . ." })
    }
}

/* 
  ============================
  🔥 Get One By ID 🔥
  ============================
*/

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await AllUsers.findOne({ _id: id }, { password: 0, hashpassword: 0 })
        return res.status(200).json(data)
    } catch (error) {
        // console.log(`Admin One User : ${error}`);
        next(error)
    }
}

const getExperienceById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await AllExperience.findOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        // console.log(`Admin One User : ${error}`);
        next(error)
    }
}

const getProjectById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await AllProjects.findOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        // console.log(`Admin One User : ${error}`);
        next(error)
    }
}

const getServiceById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await AllService.findOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        // console.log(`Admin One Service : ${error}`);
        next(error)
    }
}

/* 
  ============================
  🔥 Update By ID 🔥
  ============================
*/

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id
        const updatedUserData = req.body

        const updatedUser = await AllUsers.updateOne({ _id: id }, { $set: updatedUserData })
        res.status(200).json(updatedUser)
    } catch (error) {
        // console.log(`Update One User : ${error}`);
        next(error)
    }
}

const updateProjectById = async (req, res) => {
    try {
        const id = req.params.id
        const updatedProjectData = req.body

        const updatedProject = await AllProjects.updateOne({ _id: id }, { $set: updatedProjectData })
        res.status(200).json(updatedProject)
    } catch (error) {
        // console.log(`Update One User : ${error}`);
        next(error)
    }
}

const updateExperienceById = async (req, res) => {
    try {
        const id = req.params.id
        const updatedExperienceData = req.body

        const updatedExperience = await AllExperience.updateOne({ _id: id }, { $set: updatedExperienceData })
        res.status(200).json(updatedExperience)
    } catch (error) {
        // console.log(`Update One User : ${error}`);
        next(error)
    }
}

const updateServiceById = async (req, res, next) => {
    try {
        const id = req.params.id
        const updatedServiceData = req.body

        const updatedService = await AllService.updateOne({ _id: id }, { $set: updatedServiceData })
        res.status(200).json(updatedService)
    } catch (error) {
        // console.log(`Update One Service : ${error}`);
        next(error)
    }
}

/* 
  ============================
  🔥 Delete One By ID 🔥
  ============================
*/

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllUsers.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error)
    }
}

const deleteContactsById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllContacts.deleteOne({ _id: id })
        return res.status(200).json({ message: "Message Deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

const deleteProjectById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllProjects.deleteOne({ _id: id })
        return res.status(200).json({ message: "Project Deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

const deleteExperienceById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllExperience.deleteOne({ _id: id })
        return res.status(200).json({ message: "Experience Deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

const deleteServiceById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllService.deleteOne({ _id: id })
        return res.status(200).json({ message: "Service Deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
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
}
