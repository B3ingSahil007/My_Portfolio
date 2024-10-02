const Project = require('../models/projects-model')

const projects = async (req, res) => {
    try {
        const response = await Project.find()

        if (!response) {
            res.status(404).json({ msg: "Service not found" })
            return
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Projects : ${error}`);
    }
}

module.exports = projects