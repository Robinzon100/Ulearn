//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import defaultRouter from './landingCourses/landingCourses.routes';


//? ROUTES
import landingCourseRoutes from "./landingCourses/landingCourses.routes";
import { getSingleCourses } from './courses.controller';


//? CONTROLLERS

//? MIDDLEWARES




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//? general
defaultRouter.get('/:uuid', getSingleCourses)


//? landing
defaultRouter.use('/landing_courses', landingCourseRoutes);




export default defaultRouter;



