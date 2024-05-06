import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const RTE = ({ editorRef }) => {

    const handleContentChange = (content) => {
    }

    useEffect(() => {
        if (editorRef.current) {
            handleEditorChange(editorRef.current.getContent());
        }
    }, [editorRef]);
    
    return (
        <div>
            <Editor
                apiKey='p5ge4oc86sss87fvi40mcf66it76nrdiyram6853vi9gbdlj'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue=""
                onEditorChange={handleContentChange}
                init={{
                    height: 700,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </div>
    )
}

export default RTE