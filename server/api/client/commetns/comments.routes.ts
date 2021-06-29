import { Router } from "express";

import { defaultRouterOptions } from "../../../constants/router.options";
import { getUserWithAccessToken } from "../../../middleware/auth/validateToken.middleware";
const router = Router(defaultRouterOptions);





// ─── CONTROLLERS AND MIDDLAWARES ────────────────────────────────────────────────
import { getAllComments, postComment } from './comments.controller';



router.use(getUserWithAccessToken)



// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/:courseId', getAllComments);
router.post('/:courseId', postComment);


export default router;



