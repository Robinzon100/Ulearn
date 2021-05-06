
//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS
import { defaultRouter } from '../../../../utils/router/defautl.router';

//? CONTROLLERS
import { getLandingCourses } from './landingCourses.controller';


//? MIDDLEWARES




// ─── ROUTES ─────────────────────────────────────────────────────────────────────
defaultRouter.get('/all', getLandingCourses);





export default defaultRouter;



