const AllUsers = require('../models/user-model')
const AllContacts = require('../models/contact-model')
const AllProjects = require('../models/projects-model')
const AllExperience = require('../models/experience-model')

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

const projectUpload = async (req, res) => {
    try {
        const response = req.body;
        await AllProjects.create(response)
        return res.status(200).json({ msg: "Project Uploaded Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Project Not Uploaded . . ." })
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

const deleteProjectById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllProjects.deleteOne({ _id: id })
        return res.status(200).json({ message: "Project Deleted Successfully" })
    } catch (error) {
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

const experienceUpload = async (req, res) => {
    try {
        const response = req.body;
        await AllExperience.create(response)
        return res.status(200).json({ msg: "Experience Uploaded Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Experience Not Uploaded . . ." })
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

const deleteExperienceById = async (req, res, next) => {
    try {
        const id = req.params.id
        await AllExperience.deleteOne({ _id: id })
        return res.status(200).json({ message: "Experience Deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactsById, projectUpload, experienceUpload, deleteProjectById, getAllProject, getProjectById, updateProjectById, getAllExperience, deleteExperienceById }
