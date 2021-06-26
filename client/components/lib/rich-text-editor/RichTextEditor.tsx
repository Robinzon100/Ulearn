import { useQuill } from "react-quilljs"

import 'quill/dist/quill.snow.css';
import { useState } from 'react';




const RichTextEditor = () => {
    const { quill, quillRef } = useQuill();
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
            <div className=" rich_text_editor_container">
                <div ref={quillRef} />
            </div>
        </>
    )
}

export default RichTextEditor
