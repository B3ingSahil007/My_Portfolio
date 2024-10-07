const Experience = require('../models/experience-model')

const experience = async (req, res) => {
    try {
        const response = await Experience.find()

        if (!response) {
            res.status(404).json({ msg: "Service not found" })
            return
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Experience : ${error}`);
    }
}

module.exports = experience