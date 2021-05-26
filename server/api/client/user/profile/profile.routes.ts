import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import { defaultRouterOptions } from "../../../../constants/router.options";
import { validateTokenAndGetUser } from "../../../../middleware/auth/validateToken.middleware";
const router = express.Router(defaultRouterOptions);

// import validateRefreshTokenObject from '../../../middleware/auth/refreshToken.middlware';
// import User from '../../../models/user/user.model';


//? CONTROLLERS
import { getUser, updateUser } from "./profile.controller";

//? MIDDLEWARES


router.use(validateTokenAndGetUser)




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.route('/')
    .get(getUser)
    .post(updateUser)


export default router;



