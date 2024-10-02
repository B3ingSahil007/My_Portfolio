const User = require('../models/user-model')
const bcrypt = require('bcryptjs')

const home = async (req, res) => {
    try {
        res.status(200).send('Home Page . . .')
        res.status(200).send({ data: req.body })
    } catch (err) {
        res.status(500).send({ msg: "Internal Server Error !!" })

    }
}

const registeration = async (req, res) => {
    try {
        const { firstname, lastname, username, mnumber, city, state, email, password } = req.body;
        const userExist = await User.findOne({ email })
        // const mNumberExist = await User.findOne({ mnumber })

        if (userExist) {
            console.log("E-Mail Is Already Exists", email);
            return res.status(400).json({ msg: "E-Mail Is Already Exists" })
        }

        //^ Method 1 For password Hashing
        const saltRound = 10
        const hashpassword = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({ firstname, lastname, username, mnumber, city, state, password, hashpassword, email })

        res.status(201).json({ data: "User Created Successfully", userCreated, token: await userCreated.generateToken(), userID: userCreated._id.toString() })

        console.log(req.body);
        // res.status(200).send({ msg: 'Registeration Page . . .' })
    } catch (err) {
        res.status(500).send({ msg: "Internal Server Error !!" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email })
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials - User not found" })
        }

        //^ Methods 1 - For Password Compare Without Function
        // const isPasswordMatch = await bcrypt.compare(password, userExist.hashpassword)

        //^ Methods 2 - For Password Compare With Function
        const isPasswordMatch = await userExist.comparePassword(password)

        if (isPasswordMatch) {
            res.status(200).json({ data: "Login Successful", token: await userExist.generateToken(), userID: userExist._id.toString() })
        } else {
            res.status(401).json({ msg: "Invalid E-Mail Or Password" })
        }

        // res.status(200).send('Login Page . . .')
    } catch (err) {
        res.status(500).send({ msg: "Internal Server Error !!" })
    }
}

const user = async (req, res) => {
    try {
        const userData = req.user
        console.log(userData);
        return res.status(200).json({ userData })
    } catch (error) {
        console.log(`Error From User Route, ${error}`);
    }
}

module.exports = { home, registeration, login, user }