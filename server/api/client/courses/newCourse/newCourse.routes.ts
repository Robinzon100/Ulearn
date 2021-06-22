import { Router } from "express";

import { defaultRouterOptions } from "../../../../constants/router.options";
const router = Router(defaultRouterOptions);


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS


//? CONTROLLERS
import { postNewCourse, postCurriculumVideos } from './newCourse.controller';


//? MIDDLEWARES
import { getUserWithAccessToken } from "../../../../middleware/auth/validateToken.middleware";
import { validateNewCourse } from "../../../../middleware/body_validation/newCourse.validation";
import { courseCurriculumVideoUpload } from '../../../../utils/files/multer.utils';


router.use(getUserWithAccessToken)



// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.post('/', validateNewCourse, postNewCourse);
router.post(
    '/curriculum_videos',
    courseCurriculumVideoUpload,
    postCurriculumVideos);





export default router;



