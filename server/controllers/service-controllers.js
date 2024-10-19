const Service = require('../models/services-model')

const services = async (req, res) => {
    try {
        const response = await Service.find()

        if (!response) {
            res.status(404).json({ msg: "Service not found" })
            return
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Services : ${error}`);
    }
}

const addService = async (req, res) => {
    try {
        const response = req.body;
        console.log(response);
        await Service.create(response)
        return res.status(200).json({ msg: "Project Add Successfully . . ." })
    } catch (error) {
        return res.status(500).json({ msg: "Project Not Added . . ." })
    }
}

module.exports = {services, addService}