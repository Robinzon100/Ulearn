import { Router } from "express";
import { defaultRouterOptions } from "../../../constants/router.options";
const router = Router(defaultRouterOptions);


//! ─── OWN ────────────────────────────────────────────────
//? UTILS

//? CONTROLLERS
import { postRegistration, postLogin, postRefreshToken } from './auth.controller';

//? MIDDLEWARE
import validateRegistrationObject from '../../../middleware/auth/registration.middleware';
import validateLoginObject from '../../../middleware/auth/login.middleware';





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.post('/register', validateRegistrationObject, postRegistration);
router.post('/login', validateLoginObject, postLogin);

// TODO: write a header validator for the token
router.post('/refresh_token', postRefreshToken);



export default router;



