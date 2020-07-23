const jwt = require('jsonwebtoken')



exports.authUser = async (req, res, next) => {
    const token = req.header('auth-token')
    
    if (!token) {
        res.status(400).send("invalid token");
        res.redirect('/')
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = verified
        next()

    } catch (error) {
        res.status(400).send("invalid token");
    }

}