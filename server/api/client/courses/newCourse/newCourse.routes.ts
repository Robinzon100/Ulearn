import { Router } from "express";

import { defaultRouterOptions } from "../../../../constants/router.options";
const router = Router(defaultRouterOptions);


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS


//? CONTROLLERS
import { postNewCourse } from "./newCourse.controller";


//? MIDDLEWARES
import { getUserWithAccessToken } from "../../../../middleware/auth/validateToken.middleware";


router.use(getUserWithAccessToken)



// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.post('/all', postNewCourse);





export default router;



