import { Router } from "express";

import { defaultRouterOptions } from "../../../constants/router.options";
const router = Router(defaultRouterOptions);

//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS

//? ROUTES
import landingCourseRoutes from "./landingCourses/landingCourses.routes";
import newCourseRoutes from "./newCourse/newCourse.routes";

//? CONTROLLERS
import { getFilteredCourses, getSingleCourses } from './courses.controller';

//? MIDDLEWARES




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//? general
router.get('/:uuid', getSingleCourses)

//? new Course
router.use('/new_course', newCourseRoutes)

//? filter
router.post('/filter/:main_category_id?/:sub_category_id?/:sub_sub_category_id?', getFilteredCourses)


//? landing
router.use('/landing_courses', landingCourseRoutes);




export default router;



