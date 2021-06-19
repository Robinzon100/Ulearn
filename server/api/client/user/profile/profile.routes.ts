import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import { defaultRouterOptions } from "../../../../constants/router.options";
import { getUserWithAccessToken } from "../../../../middleware/auth/validateToken.middleware";
const router = express.Router(defaultRouterOptions);


//? CONTROLLERS
import { getUser, updateUser, uploadUserImage } from "./profile.controller";
import { validateUpdateUserObject } from '../../../../middleware/body_validation/user.validation';
import { userProfileImageUpload } from "../../../../utils/files/multer.utils";

//? MIDDLEWARES
router.use(getUserWithAccessToken)





// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.route('/')
    .get(getUser)
    .patch(validateUpdateUserObject, updateUser)


router.post('/user_image', userProfileImageUpload, uploadUserImage)



export default router;


