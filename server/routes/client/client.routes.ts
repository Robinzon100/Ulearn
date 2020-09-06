import { Router, RouterOptions } from 'express';



const clientRoutes = Router()

// ─── CUSTOM MODULES ─────────────────────────────────────────────────────────────


// ─── CONTOLLERS ─────────────────────────────────────────────────────────────────
const authController = require('../../controllers/client/auth.controller')


// ─── ADMIN LOGIN ─────────────────────────────────────────────────────────────────
clientRoutes
    .route("/login")
    .post(authController.postLogin)



export  default clientRoutes