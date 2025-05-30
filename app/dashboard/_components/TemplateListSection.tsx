import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

/*export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]

}

export interface FORM{
  label:string, 
  field:string,
  name:string,
  required?:boolean

}*/

export type FORM = {
  label: string;
  field: string;
  name: string;
  required: boolean;
};

export type TEMPLATE = {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: FORM[];
};

function TemplateListSection({userSearchInput}:any) {

  const[templateList,setTemplateList] = useState(Templates)
  useEffect(()=>
  {
    if(userSearchInput)
    {
      const filterData = Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      setTemplateList(filterData);
    }
    else
    {
      setTemplateList(Templates)
    }
  },[userSearchInput])


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.map((item:{ [key: string]: any },index:number)=>(
        <TemplateCard form={[]} name={''} desc={''} icon={''} category={''} slug={''} aiPrompt={''} {...item}></TemplateCard>
      ))}
    </div>
  )
}

export default TemplateListSection
