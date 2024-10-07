const { Schema, model, Mongoose } = require('mongoose')

const experienceSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
})

const Experience = new model('Experience', experienceSchema)
module.exports = Experience