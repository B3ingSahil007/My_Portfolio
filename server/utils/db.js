const mongoose = require('mongoose')

// const URI = "mongodb+srv://b3ingsahil007:SahilRizzu218925@cluster0.4pkft4a.mongodb.net/mern_admin"
const URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection Successfully Established To Database");
    } catch (err) {
        console.log(err, "Database Connection Failed");
        process.exit(0)
    }
}

module.exports = connectDB