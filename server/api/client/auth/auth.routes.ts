import express from "express";
import { defaultRouterOptions } from "../../../constants/router.options";
const router = express.Router(defaultRouterOptions);


// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
import { postRegistration, postLogin } from './auth.controller';
import validateRegistrationObject  from '../../../middleware/auth/registration.middleware';




router.post('/register', validateRegistrationObject, postRegistration);
router.post('/login', postLogin);


export default router;



