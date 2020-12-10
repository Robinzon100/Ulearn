import express from "express";
import { defaultRouterOptions } from "../../../constants/router.options";
const router = express.Router(defaultRouterOptions);


// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
import { postRegistration, postLogin, postRefreshToken } from './auth.controller';
import validateRegistrationObject from '../../../middleware/auth/registration.middleware';
import validateLoginObject from '../../../middleware/auth/login.middleware';
import validateRefreshTokenObject from '../../../middleware/auth/refreshToken.middlware';




router.post('/register', validateRegistrationObject, postRegistration);
router.post('/login', validateLoginObject, postLogin);
router.post('/refresh_token', validateRefreshTokenObject, postRefreshToken);



export default router;



