/*"use client"
import React, { useState } from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'

interface PROPS{
  params:{
    'template-slug':string
  }
}

function CreateNewContent(props:PROPS) {
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

  const[loading,setLoading] = useState(false);
  const[aiOutput,setAiOutput] = useState<string>('');
  const{user} = useUser();


  const GenerateAIContent= async(formData:any)=>
  {
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;

    const FinalAIPrompt=JSON.stringify(formData)+" , "+SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());
    await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
    setLoading(false);
  }

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>
  {
    try{
    const result =await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress || 'unknown',
      createdAt:new Date().toLocaleDateString("en-GB")
    })
  }catch(error)
  {
    console.error(error);
  }
}

  return (

    <div className='p-10'>
      <Link href={"/dashboard"}>
      <Button><ArrowLeft></ArrowLeft>Back</Button>
      </Link>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      <FormSection 
      selectedTemplate={selectedTemplate}
      userFormInput={(v:any)=>GenerateAIContent(v)}
      loading={loading}></FormSection>

      <div className='col-span-2'>
      <OutputSection aiOutput={aiOutput}></OutputSection>    
      </div>
     
    </div>

    </div>
   
  )
}

export default CreateNewContent*/


"use client"

import React, { useState } from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'

interface Props {
  params: {
    'template-slug': string
  }
}

function CreateNewContent({ params }: Props) {
  const selectedTemplate = Templates?.find((item) => item.slug === params['template-slug'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState('')
  const { user } = useUser()

  const generateAIContent = async (formData: any) => {
    try {
      setLoading(true)
      const selectedPrompt = selectedTemplate?.aiPrompt
      
      if (!selectedPrompt) {
        throw new Error('No prompt template found')
      }

      const finalAIPrompt = `${JSON.stringify(formData)}, ${selectedPrompt}`
      const result = await chatSession.sendMessage(finalAIPrompt)
      
      if (!result?.response) {
        throw new Error('No response from AI')
      }

      const responseText = await result.response.text()
      setAiOutput(responseText)
      await saveInDb(formData, selectedTemplate?.slug, responseText)
    } catch (error) {
      console.error('Error generating AI content:', error)
      setAiOutput('Error generating content. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const saveInDb = async (formData: any, slug: string | undefined, aiResp: string) => {
    try {
      if (!slug) {
        throw new Error('Template slug is required')
      }

      await db.insert(AIOutput).values({
        formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress ?? 'unknown',
        createdAt: new Date().toLocaleDateString('en-GB')
      })
    } catch (error) {
      console.error('Error saving to database:', error)
    }
  }

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft className="mr-2" />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={generateAIContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent


