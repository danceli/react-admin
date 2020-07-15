import React from 'react'
import './index.less'
import {Editor} from '@tinymce/tinymce-react';

const RichTextEditor = (props)=>{
  const handleEditorChange = (content,editor) => {
    console.log(content,editor)
  }
  const editorOptions = {
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | image link code' ,
    content_css: '//www.tiny.cloud/css/codepen.min.css',
  }
  return (
    <div className="richTextEditor">
      <Editor onEditorChange={handleEditorChange} apiKey="wljc5hrs5iqwxgzx3me8byjd08z8iwzrjgb9l3gqpefap38u" init={editorOptions}>

      </Editor>
    </div>
  )
}
export default RichTextEditor
