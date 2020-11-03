import express from "express";
import authRoutes from "./client/auth/auth.router";
const router = express.Router()

// TODO: add some safety to the routes https://expressjs.com/es/api.html

router.use("/auth", authRoutes)


export default router



