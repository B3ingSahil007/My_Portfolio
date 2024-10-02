const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWTKEY = process.env.JWT_SECRET_KEY

const registerationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    mnumber: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    hashpassword: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})


//^ Method 2 For Password Hashing
// registerationSchema.pre("save", async function(next) {
//     const user = this;
//     if (!user.isModified("password")) {
//         next()
//     }
//     try {
//         const saltRound = await bcrypt.genSalt(10)
//         const hashpassword = await bcrypt.hashpassword(user.password, saltRound)
//         user.password = hashpassword
//     } catch (error) {
//         next(error)
//     }
// })

//^ Methods 2 - For Password Compare With Function
registerationSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.hashpassword)
}

registerationSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userID: this._id.toString(),
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin
        }, JWTKEY, {
            expiresIn: "30d"
        })
    } catch (error) {
        console.error(error);
    }
}

const User = new mongoose.model('User', registerationSchema)
module.exports = User