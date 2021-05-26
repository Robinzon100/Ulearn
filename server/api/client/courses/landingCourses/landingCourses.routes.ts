import { Router } from "express";

import { defaultRouterOptions } from "../../../../constants/router.options";
const router = Router(defaultRouterOptions);


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS


//? CONTROLLERS
import { getLandingCourses } from './landingCourses.controller';


//? MIDDLEWARES




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.get('/all', getLandingCourses);





export default router;



