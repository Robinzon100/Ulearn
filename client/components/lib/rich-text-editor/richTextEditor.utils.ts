import { postCourseImage } from "actions/client/course/newCourse/courseInfo.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";





// Insert Image(selected by user) to quill
const insertToEditor = (url, quill) => {
    const range = quill.getSelection();
    quill.insertEmbed(10, 'image', url);
};

// Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
const saveToServer = async (file, quill) => {
    const body = new FormData();
    body.append('course_image', file);

    const { fileKey } = await authenticatedRequest(postCourseImage, body, null)
    insertToEditor(`${process.env.BACK_END_URL}/api/images/${fileKey}`, quill);
};

// Open Dialog to select Image File
export const selectLocalImage = (quill) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
        const file = input.files[0];
        saveToServer(file, quill);
    };
};

