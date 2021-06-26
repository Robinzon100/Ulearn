import { useQuill } from "react-quilljs"

import 'quill/dist/quill.snow.css';
import { useState } from 'react';
import { allBrandColors } from "constant/colors";




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


    quill &&
        quill.on('text-change', (delta, oldContents, source) => {
            if (source !== 'user') return;

            const inserted = getImgUrls(delta);
            const deleted = getImgUrls(quill.getContents().diff(oldContents));
            inserted.length && console.log('insert', inserted)
            deleted.length && console.log('delete', deleted)

            console.log(quill.getContents());

            // setEditorContent(quill.getContents())


        });

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
