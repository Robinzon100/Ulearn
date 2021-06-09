import { Router } from "express";

import { defaultRouterOptions } from "../../../constants/router.options";
const router = Router(defaultRouterOptions);

//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS

//? ROUTES
import landingCourseRoutes from "./landingCourses/landingCourses.routes";

//? CONTROLLERS
import { getFilteredCourses, getSingleCourses } from './courses.controller';

//? MIDDLEWARES




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//? general
router.get('/filter', getFilteredCourses)
router.get('/:uuid', getSingleCourses)


//? landing
router.use('/landing_courses', landingCourseRoutes);




export default router;



