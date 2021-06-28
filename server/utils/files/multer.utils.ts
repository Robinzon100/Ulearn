import multer from "multer"
const upload = multer({ dest: 'uploads/' })


export const userProfileImageUpload = upload.single('user_profile_image')







const uploadVideo = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname + '-' + Date.now())
        }
    })
})



export const courseCurriculumVideoUpload = uploadVideo.single('course_curriculum_videos')
export const courseImageUpload = upload.single('course_image')
