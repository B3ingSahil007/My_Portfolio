const { Schema, model, Mongoose } = require('mongoose')

const projectSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    link: {
        type: String,
        required: true
    },
})

const Project = new model('Project', projectSchema)
module.exports = Project