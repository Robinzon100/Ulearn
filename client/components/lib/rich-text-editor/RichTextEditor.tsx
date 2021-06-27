import { useState, useEffect, useRef, useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { selectLocalImage } from './richTextEditor.utils';
import Button from 'components/lib/button/Button';




const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill");
        // @ts-ignore
        return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
    },
    {
        ssr: false
    }
);




const RichTextEditor = ({ onSave, value }: { onSave: any, value?: string }) => {
    const [editorContent, setEditorContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const quillRef = useRef();




    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: '1' }, { header: '2' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                ],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            handlers: {
                image: () => {
                    // @ts-ignore
                    selectLocalImage(quillRef.current.getEditor().selection.root)
                },
            },
        }
    }), [])






    return (
        <>
            {isEditing && (
                <Button
                    width="15rem"
                    size="medium"
                    color="black"
                    style={{
                        margin: '1rem 0'
                    }}
                    onClick={() => {
                        setIsEditing(false)
                        // @ts-ignore
                        onSave(editorContent)
                    }}>
                    <p className="f-weight-r f-size-p4 ">გაგზავნა</p>
                </Button>
            )}
            <div
                className="raw_html_styles rich_text_editor_container">
                <ReactQuill
                    // @ts-ignore
                    forwardedRef={quillRef}
                    onFocus={() => setIsEditing(true)}
                    theme="snow"
                    value={editorContent}
                    onChange={(value) => setEditorContent(value)}
                    id={'quill'}
                    className='text_editor'
                    modules={modules}
                />


            </div>
        </>
    )
}

export default RichTextEditor
