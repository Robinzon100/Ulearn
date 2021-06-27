import { postCourseImage } from "actions/client/course/newCourse/courseInfo.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";





// Insert Image(selected by user) toeditorEl 
const insertToEditor = (url, editorEl: HTMLElement) => {
    // const range = editorEl.getSelection();
    // editorEl.insertEmbed(100, 'image', url);
    editorEl.innerHTML += `<img src="${url}"/>`
};

// Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
const saveToServer = async (file, editorEl) => {
    const body = new FormData();
    body.append('course_image', file);

    const { fileKey } = await authenticatedRequest(postCourseImage, body, null)
    insertToEditor(`${process.env.BACK_END_URL}/api/images/${fileKey}`, editorEl);
};

// Open Dialog to select Image File
export const selectLocalImage = (editorEl) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
        const file = input.files[0];
        saveToServer(file, editorEl);
    };
};

