import multer from "multer"
const upload = multer({ dest: 'uploads/' })


export const userProfileImageUpload = upload.single('user_profile_image')


export const courseCurriculumVideoUpload = upload.array('course_curriculum_videos', 40)