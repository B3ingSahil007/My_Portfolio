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


const addExperience = async (req, res) => {
    try {
        const response = req.body;
        console.log(response);
        await Experience.create(response)
        return res.status(200).json({ msg: "Experience Add Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Experience Not Added . . ." })
    }
}

module.exports = {experience, addExperience}