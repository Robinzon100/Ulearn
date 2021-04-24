import jwt from 'jsonwebtoken';
import express from "express";
import { defaultRouterOptions } from "../../../constants/router.options";
const router = express.Router(defaultRouterOptions);


// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
import { postRegistration, postLogin, postRefreshToken } from './auth.controller';
import validateRegistrationObject from '../../../middleware/auth/registration.middleware';
import validateLoginObject from '../../../middleware/auth/login.middleware';
// import validateRefreshTokenObject from '../../../middleware/auth/refreshToken.middlware';
import User from '../../../models/user/user.model';





// router.use(async (req, res, next) => {
//     const { auth_refresh_token } = req.headers
//     interface IRefreshToken { userUUID: string }

//     const { userUUID } = jwt.verify(
//         `${auth_refresh_token}`, process.env.JWT_REFRESH_TOKEN_SECRET!) as IRefreshToken

//     const user = await User.query().where('uuid', userUUID)
//     req.user = user
//     next()
// })


router.post('/register', validateRegistrationObject, postRegistration);
router.post('/login', validateLoginObject, postLogin);

// TODO: write a header validator for the token
router.post('/refresh_token', postRefreshToken);



export default router;



