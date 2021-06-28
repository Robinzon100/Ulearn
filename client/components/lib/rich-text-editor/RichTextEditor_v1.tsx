import { useQuill } from "react-quilljs"

import 'quill/dist/quill.snow.css';
import { allBrandColors } from "constant/colors";
import { authenticatedRequest } from '../../utils/auth/tokenValidations';
import { postCourseImage, deleteCourseImage } from '../../../actions/client/course/newCourse/courseInfo.action';
import Button from "../button/Button";
// import { useState } from 'react';




const RichTextEditor = ({ onChange }) => {
    const theme = 'snow';
    const modules = {
        toolbar: [
            [{ 'header': 1 }, { 'header': 2 }],

            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [...allBrandColors] }, { background: [...allBrandColors] }],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const placeholder = 'დეტალური აღწერა კურსის შესახებ';
    const { quill, quillRef } = useQuill({ theme, modules, placeholder });
    // const [startedEditing, setstartedEditing] = useState(false)




    quill &&
        quill.on('text-change', async (delta, oldContents, source) => {
            if (source !== 'user') return;
            const inserted = getImgUrls(delta);
            const deleted = getImgUrls(quill.getContents().diff(oldContents));


            if (inserted.length) {
                fetch(inserted)
                    .then(res => {
                        return res.blob();
                    })  
                    .then(async (editorImage) => {
                        const courseImageForm = new FormData()
                        courseImageForm.append('course_image', editorImage)
                        const base64Image = quillRef.current.querySelector(`img[src="${inserted[0]}"]`) as HTMLImageElement;
                        try {
                            const { fileKey } = await authenticatedRequest(postCourseImage, courseImageForm, null)

                            if (fileKey) {
                                base64Image.remove()
                                quill.insertEmbed(100, 'image', `${process.env.BACK_END_URL}/api/images/${fileKey}`);
                            }
                        } catch (error) {
                            console.log('asdf');
                        }
                    })
                deleted.length && console.log('delete', deleted)
            }


            if (deleted.length) {
                if (deleted[0].split(`${process.env.BACK_END_URL}/api/images/`).length > 0) {
                    const fileKey = deleted[0].split(`${process.env.BACK_END_URL}/api/images/`)[1]
                    await authenticatedRequest(deleteCourseImage, fileKey, null)
                }
            }
        })



    function getImgUrls(delta) {
        return delta.ops.filter(i => i.insert && i.insert.image).map(i => i.insert.image);
    }





    return (
        <>
            {quill && (
                <Button
                    width="15rem"
                    size="medium"
                    color="black"
                    onClick={() => onChange(JSON.stringify(quill.getContents()))}
                >
                    <p className="f-weight-r f-size-p4 ">შენახვა</p>
                </Button>
            )}
            <div
                className="raw_html_styles rich_text_editor_container">

                <div ref={quillRef} />
            </div>
        </>
    )
}

export default RichTextEditor
