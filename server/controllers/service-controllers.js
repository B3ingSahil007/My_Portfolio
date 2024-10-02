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

module.exports = services