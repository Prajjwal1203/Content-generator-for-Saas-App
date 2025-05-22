/*import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { types } from 'util';

interface props{
  aiOutput:string;
}

function OutputSection({aiOutput}:props) {

  const editorRef:any=useRef();
  
  useEffect(()=>
  {
    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])


  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'> Your Result</h2>
        <Button className='flex gap-2'><Copy className='w-4 h-4'></Copy>Copy</Button>
      </div>
    <Editor
    ref={editorRef}
    initialValue="Your result will appear here!"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection
*/

import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const [content, setContent] = useState("Your result will appear here!");
  
  useEffect(() => {
    if (aiOutput) {
      setContent(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = async () => {
    try {
      // Create a temporary div to extract plain text from HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      const plainText = tempDiv.textContent || tempDiv.innerText || '';
      
      await navigator.clipboard.writeText(plainText);
      // You could add a toast notification here
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy content:', err);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      </div>
      <div className='p-5 pt-0'>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          style={{ height: '500px', marginBottom: '50px' }}
        />
      </div>
    </div>
  )
}

export default OutputSection