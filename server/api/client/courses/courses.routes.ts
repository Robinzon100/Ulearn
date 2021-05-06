//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import defaultRouter from './landingCourses/landingCourses.routes';


//? ROUTES
import landingCourseRoutes from "./landingCourses/landingCourses.routes";


//? CONTROLLERS

//? MIDDLEWARES




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
defaultRouter.use('/landing_courses', landingCourseRoutes);




export default defaultRouter;



