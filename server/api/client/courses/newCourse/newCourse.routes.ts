import { Router } from "express";

import { defaultRouterOptions } from "../../../../constants/router.options";
const router = Router(defaultRouterOptions);


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? UTILS


//? CONTROLLERS
import { postNewCourse, postCurriculumVideos, postNewCourseImage } from './newCourse.controller';


//? MIDDLEWARES
import { getUserWithAccessToken } from "../../../../middleware/auth/validateToken.middleware";
import { validateNewCourse } from "../../../../middleware/body_validation/newCourse.validation";
import { courseCurriculumVideoUpload, courseImageUpload } from '../../../../utils/files/multer.utils';


router.use(getUserWithAccessToken)



// ─── ROUTES ─────────────────────────────────────────────────────────────────────
router.post('/', validateNewCourse, postNewCourse);
router.post('/images', courseImageUpload, postNewCourseImage);

router.post(
    '/curriculum_videos',
    courseCurriculumVideoUpload,
    postCurriculumVideos);





export default router;



