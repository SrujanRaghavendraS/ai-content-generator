"use client"
import React, { useState } from 'react'
import { Course } from '../../_components/Features'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
interface PROPS{

      selectedTemplate?:Course;
      userFormInput:any;
      loading:boolean
  
}
function FormSection({selectedTemplate,userFormInput,loading}:PROPS) {
  //console.log(selectedTemplate)
  const handleInputChange=(event:any)=>{
    const {name,value}=event.target;
    setFormData({...formData,[name]:value})
  }

  const [formData,setFormData]=useState<any>()
  const onSubmit=(e:any)=>{
    e.preventDefault();
    userFormInput(formData)
  }


  return (<div >
    <div className='flex items-center justify-center text-white shadow-white border-white border-2 rounded '>{selectedTemplate?.name}</div>
    <br />
    <form onSubmit={onSubmit}>
    {selectedTemplate?.form?.map((item,index)=> <div className='p-2'>
      <label className='text-white flex items-center justify-center font-bold'>
        {item.label}
      </label>{
        item.field=='input'?<Input name={item.name} required={item?.required} onChange={handleInputChange} className='text-white'></Input>:item.field=='textarea'?
        <Textarea name={item.name} required={item?.required} onChange={handleInputChange} className='text-white'></Textarea>:null
      }

    </div>)}
    <Button type='submit' variant={'ghost'} className='ml-2 p-2' disabled={loading}>
      
      {loading && <Loader2Icon className='animate-spin'/>} 
      Generate Content</Button>
    </form>
    
    </div>
  )
}

export default FormSection