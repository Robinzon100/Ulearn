const jwt = require("jsonwebtoken")


//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
const clientQueries = require("../../querys/client.queries");



//! ─── POST ───────────────────────────────────────────────────────────────────────

exports.postLogin = async (req, res) => {
    const { name, password } = req.body;


    try {
        await clientQueries.getSingleFromCollectionWhere("users", { name: name, password: password })
            .then(result => {
                const { _id } = result;

                if (_id) {
                    const token = jwt.sign({ _id: _id }, process.env.JWT_TOKEN)
                    res.header("auth-token", token)
                    res.json({
                        message: "logedIn",
                        token: token
                    })
                }else{
                    res.json({
                        message: "notLogedIn",
                    })
                }


            });
    } catch (error) {
        res.json({
            message: "notLogedIn",
        })
    }
};

