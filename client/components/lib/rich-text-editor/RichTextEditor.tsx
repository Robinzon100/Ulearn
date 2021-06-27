import { useQuill } from "react-quilljs"

import 'quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import { allBrandColors } from "constant/colors";
import { authenticatedRequest } from '../../utils/auth/tokenValidations';
import { postCourseImage } from '../../../actions/client/course/newCourse/courseInfo.action';
import { selectLocalImage } from './richTextEditor.utils';




const RichTextEditor = () => {
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
    const formats = ['bold', 'italic', 'underline', 'strike'];
    const { quill, quillRef } = useQuill({ theme, modules, placeholder });
    const [editorContent, setEditorContent] = useState(null)

    // useEffect(() => {
    //     if (quill) {
    //         quill.getModule("toolbar").addHandler("image", selectLocalImage(quill));
    //     }
    // }, [quill])


    quill &&
        quill.on('text-change', (delta, oldContents, source) => {
            if (source !== 'user') return;

            const inserted = getImgUrls(delta);
            const deleted = getImgUrls(quill.getContents().diff(oldContents));
            // console.log(inserted);

            if (inserted.length) {
                const base64Image = quillRef.current.querySelector(`img[src="${inserted[0]}"]`) as HTMLImageElement;
                base64Image.remove()
                fetch(inserted)
                    .then(res => {
                        return res.blob();
                    })
                    .then(async (editorImage) => {
                        const courseImageForm = new FormData()
                        courseImageForm.append('course_image', editorImage)
                        const { fileKey } = await authenticatedRequest(postCourseImage, courseImageForm, null)

                        if (fileKey) {
                            quill.insertEmbed(10, 'image', `${process.env.BACK_END_URL}/api/images/${fileKey}`);
                        }
                    })
                deleted.length && console.log('delete', deleted)
                console.log(quill.getContents());
            }

            if (deleted.length) {
                console.log({ deleted });
            }
        })


    // quill.on('text-change', (delta, oldContents, source) => {
    //     if (source !== 'user') return;

    //     const inserted = getImgUrls(delta);
    //     const deleted = getImgUrls(quill.getContents().diff(oldContents));
    //     inserted.length && console.log('insert', inserted)
    //     deleted.length && console.log('delete', deleted)

    //     console.log(quill.getContents());

    //     // setEditorContent(quill.getContents())


    // });

    function getImgUrls(delta) {
        return delta.ops.filter(i => i.insert && i.insert.image).map(i => i.insert.image);
    }



    return (
        <>
            <div
                className="raw_html_styles rich_text_editor_container">
                <div ref={quillRef} />
            </div>
        </>
    )
}

export default RichTextEditor
