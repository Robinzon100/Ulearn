import express from "express";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import { defaultRouterOptions } from "../../../../constants/router.options";
import { getUserWithAccessToken } from "../../../../middleware/auth/validateToken.middleware";
const router = express.Router(defaultRouterOptions);


//? CONTROLLERS
// import { validateUpdateUserObject } from '../../../../middleware/body_validation/user.validation';
import { getUserPrefferedCategory, postUserLikeCourse, } from "./userCourses.controller";


//? MIDDLEWARES
router.use(getUserWithAccessToken)




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.post('/addToLiked', postUserLikeCourse)
router.get('/preffered_category', getUserPrefferedCategory)

export default router;



