import express from "express";
import { defaultRouterOptions } from "../../../constants/router.options";
const router = express.Router(defaultRouterOptions);


// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
import { postRegistration, postLogin } from './auth.controller';
import validateRegistrationObject  from '../../../middleware/auth/registration.middleware';
import validateloginObject  from '../../../middleware/auth/login.middleware';




router.post('/register', validateRegistrationObject, postRegistration);
router.post('/login', validateloginObject,  postLogin);


export default router;



