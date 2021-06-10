import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import { defaultRouterOptions } from "../../../../constants/router.options";
import { getUserWithAccessToken } from "../../../../middleware/auth/validateToken.middleware";
const router = express.Router(defaultRouterOptions);


//? CONTROLLERS
// import { validateUpdateUserObject } from '../../../../middleware/body_validation/user.validation';
import { getUserPreferedCategory, postUserLikeCourse, } from "./userCourses.controller";


//? MIDDLEWARES
router.use(getUserWithAccessToken)




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.route('/addToLiked')
    .post(postUserLikeCourse)

router.get('/prefered_category', getUserPreferedCategory)

export default router;



