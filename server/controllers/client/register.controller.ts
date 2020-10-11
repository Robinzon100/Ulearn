import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken")


//! ─── QUERYS ─────────────────────────────────────────────────────────────────────
// const clientQueries = require("../../querys/client.queries");



//! ─── POST ───────────────────────────────────────────────────────────────────────

export const postRegister = async (req: Request, res: Response) => {
    const { name, password } = req.body;

    const _id = 'result';

    if (_id) {
        const token = jwt.sign({ _id: _id }, process.env.JWT_TOKEN)
        res.header("auth-token", token)
        res.json({
            message: "logedIn",
            token: token
        })
    } else {
        res.json({
            message: "notLogedIn",
        })
    }
}

