require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router')
const projectRoute = require('./router/project-router')
const experienceRoute = require('./router/experience-router')
const adminRoute = require('./router/admin-router')
const connectDB = require('./utils/db')

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH, PROPFIND',
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use("/api/data", projectRoute)
app.use("/api/data", experienceRoute)
app.use("/api/admin", adminRoute)
app.use("/api/admin", projectRoute)

// app.get('/', (req, res) => {
//     res.status(200).send('Home Page . . .')
// })

const port = 5000
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port : ${port}`)
    })
})