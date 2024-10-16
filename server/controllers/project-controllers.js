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

const addProject = async (req, res) => {
    try {
        const response = req.body;
        console.log(response);
        await Project.create(response)
        return res.status(200).json({ msg: "Project Add Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Project Not Added . . ." })
    }
}

module.exports = {projects, addProject}