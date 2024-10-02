const { Schema, model, Mongoose } = require('mongoose')

const serviceSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Service = new model('Service', serviceSchema)
module.exports = Service