const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const errMsg = err.errors[0].message
        res.status(400).json({ msg: "Validation Failed", errMsg })
        console.log(errMsg);
    }
}
module.exports = validate