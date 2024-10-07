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

module.exports = { getAllUsers, getAllContacts }
//^ Don't Be Smart Bro, I Am Watching You, Only Website Creater Should Be Admin. Plz Login As User.