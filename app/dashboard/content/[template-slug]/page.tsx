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

{ /* if (!user) {
    return <div>You must be logged in to access this page.</div>
  }*/}

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
      createdBy:user?.primaryEmailAddress?.emailAddress,
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

export default CreateNewContent

/*"use client"
import React, { useState, useContext } from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubsContext } from '@/app/(context)/UserSubsContext'
import { UpdateCreditsContext } from '@/app/(context)/UpdateCreditsContext'



interface SLUGPROPS {
  params: {
    'slug': string
  }
}

const ContentPage = (props: SLUGPROPS) => {


  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<string>();
  const { user } = useUser()
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
  const { userSubscription, setUserSubscription } = useContext(UserSubsContext)
  const { credits, setCredits } = useContext(UpdateCreditsContext)

  eturns 
   
  const generateContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(formData) + "," + selectedPrompt
    const result = await chatSession.sendMessage(finalPrompt)
    const aiResponse = await result.response.text()
    // console.log(result.response.text())
    setResult(result.response.text())
    await saveInDb(JSON.stringify(formData), selectedTemplate?.slug, aiResponse)
    setLoading(false)

    setCredits(Date.now())

  }
  const saveInDb = async (formData: any, slug: any, aiResponse: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData || '',
      templateSlug: slug || '',
      aiResponse: aiResponse || '',
      createdBy: user?.primaryEmailAddress?.emailAddress || '',
      createdAt: moment().format('DD/MM/YYYY')
    })
    console.log(result)
  }





  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params.slug)

  return (
    <div className='p-5 bg-gray-100'>
      <Link href={'/dashboard'}>
        <Button><ArrowLeft></ArrowLeft></Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(e: any) => generateContent(e)} loading={loading} />
        <div className='col-span-2'>
         {/*<Output result={result || ''} />*
         <OutputSection aiOutput={aiOutput}></OutputSection>
        </div>
      </div>
    </div>
  )

}

export default ContentPage*/