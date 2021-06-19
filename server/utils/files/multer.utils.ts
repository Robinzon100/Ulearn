import multer from "multer"
const upload = multer({ dest: 'uploads/' })


export const userProfileImageUpload = upload.single('user_profile_image')