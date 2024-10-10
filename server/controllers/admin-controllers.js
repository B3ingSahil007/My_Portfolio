const AllUsers = require('../models/user-model')
const AllContacts = require('../models/contact-model')

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

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactsById }
