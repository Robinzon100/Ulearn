import express from "express";
import authRoutes from "./client/auth/auth.router";
const router = express.Router()


router.use("/auth", authRoutes)


export default router



