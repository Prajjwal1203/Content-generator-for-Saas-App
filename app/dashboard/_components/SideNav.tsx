"use client"
import { FileClock, Home, LayoutDashboardIcon, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'
import UsageTrack from './UsageTrack'

function SideNav() {

  const MenuList=[
    {
      name: "Home",
      icon: Home,
      path: '/'
    },
    {
      name: "Dashboard",
      icon: LayoutDashboardIcon,
      path: '/dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: "Pricing",
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: "Settings",
      icon: Settings,
      path: '/dashboard/settings'
    }
  ]

  const path=usePathname();
  useEffect(()=>
    {
      console.log(path);
    },[])
  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
      <Image src={'/logo.svg'} alt='logo' width={100} height={100}></Image>
      </div>

     <hr className='my-6 border'></hr>

     <div className='mt-3'> 
        {MenuList.map((menu,index)=>
        <Link href={menu.path} key={index}>
        <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
        ${path==menu.path && 'bg-primary text-white'}`}>
          <menu.icon className='h-6 w-6'></menu.icon>
          <h2 className='text-lg'>{menu.name}</h2>
          </div> 
          </Link>   
        )}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack></UsageTrack>
      </div>

    </div>
  )
}

export default SideNav
