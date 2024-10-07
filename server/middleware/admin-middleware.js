const adminMiddleware = async (req, res, next) => {
    try {
        // console.log(req.user);
        const adminRole = req.user.isAdmin

        if (!adminRole) {
            console.log("You Are Not Admin, Login As User");
            return res.status(403).json({ message: "Don't Be Smart Bro, I Am Watching You, Only Website Creater Should Be Admin. Plz Login As User." })
        }

        // req.status(200).json({ msg: adminRole })
        next();
    } catch (error) {
        next("Unauthorized Admin, Invalid Token", error)
        // return res.status(401).json({ msg: "Unauthorized, Invalid Token" })
    }

}

module.exports = adminMiddleware