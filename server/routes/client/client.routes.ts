import { Router, RouterOptions } from 'express';



const clientRoutes = Router()

//! ─── CUSTOM MODULES ─────────────────────────────────────────────────────────────


//! ─── CONTOLLERS ─────────────────────────────────────────────────────────────────
import { postRegister } from "../../controllers/client/register.controller";


//! ─── REGISTER ─────────────────────────────────────────────────────────────────
clientRoutes
    .route("/register")
    .post(postRegister)



export  default clientRoutes