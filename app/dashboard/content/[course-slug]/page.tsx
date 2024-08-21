"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormsSection'
import OutputSection from '../_components/OutputSection'
import Templates from "@/app/(data)/features.json"
import { Course } from '../../_components/Features'
import { chatSession } from '@/app/utils/AIMODEL'
interface PROPS{
  params:{
      'course-slug':string
  }
  
}

function CreateNewContent(props:PROPS) {
    // console.log(props)
    const Template=Templates.courses
    const [loading,setLoading]=useState(false);
    const [aiOutput,setaiOutput]=useState<string>();

    
    const generateAIContent=async(FormData:any)=>{
      
      setLoading(true);
      const selectedPrompt=selectedTemplate?.aiprompt;
      console.log(FormData)
      const finalaiprompt=JSON.stringify(FormData)+', '+selectedPrompt;
      console.log(finalaiprompt)
      const result=await chatSession.sendMessage(finalaiprompt);
      console.log(finalaiprompt)
      console.log(result.response.text());
      setaiOutput(result?.response.text())
      setLoading(false);
    }
    //console.log()
  const selectedTemplate:Course|undefined = Template?.find((item)=>item.slug==props.params['course-slug']);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 mt-40 '>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>generateAIContent(v)} loading={loading}/>
        <OutputSection aiOutput={aiOutput}/>
    </div>
  )
}

export default CreateNewContent