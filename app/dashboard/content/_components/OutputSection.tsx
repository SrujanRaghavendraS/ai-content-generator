import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useReducedMotion } from 'framer-motion';
interface props{
  aiOutput:string|undefined
}

function OutputSection({aiOutput}:props) {
  const editorRef:any=useRef();
  useEffect(
    ()=>{
      const editorInstance=editorRef.current.getInstance()
      editorInstance.setMarkdown(aiOutput)
    },[aiOutput]
  )



  return (<div>
    <div className=' text-white flex items-center justify-center border-white border-2 rounded'>Your Result</div>
    <div className='bg-gray-500 mt-2 border rounded-md'>
      
      
      <Editor 
      ref={editorRef}
    initialValue="Your result will appear here"
    
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    inChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  /></div>
    
    </div>
  )
}

export default OutputSection