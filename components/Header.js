import React,{ useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { IoNotificationsCircleSharp} from 'react-icons/io5'
import { IoMdHelpCircleOutline} from 'react-icons/io'
import { FaUserCircle} from 'react-icons/fa'
import { CgProfile} from 'react-icons/cg'
import { TbCheckupList} from 'react-icons/tb'
import { BiLogIn} from 'react-icons/bi'
import {RiFeedbackLine} from 'react-icons/ri'
import { AiOutlineSetting} from 'react-icons/ai'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
const Header = () => {
  let router=useRouter()
  const handleprofile=()=>{
 let {token}=parseCookies();
  if(token){
    router.push('/profile')
  }
  else{
    router.push('/login')
  }
  } 
  const handleorders=()=>{
 let {token}=parseCookies();
  if(token){
    router.push('/orders')
  }
  else{
    router.push('/login')
  }
  } 
  return (
    <section className=' w-full h-16 flex sticky top-0 order-2 z-10 bg-white justify-center flex-row shadow-lg'>
        <div className="max-w-[1600px]  w-full justify-center flex">
      <div className='flex w-full flex-row justify-around '>
        <div className=' w-fit inline-flex xsm:justify-center xsm:flex h-16 my-auto'><Link href="/"><img className='cursor-pointer rounded ' src="/magento.png" alt="" /></Link></div>
        <div className='flex justify-around my-auto xsm:absolute top-[75px]'>
        <form method="GET"  action="/product">
    <div className="relative text-gray-600 focus-within:text-gray-400 border-2 border-gray-400 rounded-md">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
        <button type="submit" className="p-1 " >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 text-sm rounded-md pl-10 w-80 my-auto outline-none bg-gray-50 focus:text-gray-900" placeholder="Search..." autoComplete="off"/>
    </div>
  </form>
        </div>
      <div className='inline-flex space-x-5 my-auto'>  
 <Link href="/cart"><a className='inline-flex text-2xl hover:text-orange-600 text-orange-600  '><button><BsCartFill /></button></a></Link>
        <div className="dropdown">
  <button className=" inline-flex text-2xl pt-2 text-orange-600   hover:text-orange-600 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <FaUserCircle />
  </button>
  <ul className="dropdown-menu rounded-md bg-slate-100 " aria-labelledby="dropdownMenuButton1">
    <li> <button onClick={handleprofile} className="dropdown-item flex hover:bg-orange-400 font-medium text-center">Your Profile <CgProfile className='mt-1 ml-2'/></button></li>
    <li> <button onClick={handleorders} className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Your Orders <TbCheckupList className='mt-1 ml-2'/></button></li>
    <li><Link href="/login"><a className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Login <BiLogIn className='mt-1 ml-2'/></a></Link></li>
    <li><Link href="/registeration"><a className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Register <BiLogIn className='mt-1 ml-2'/></a></Link></li>
    <li><Link href="/"><a className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Help <IoMdHelpCircleOutline className='mt-1 ml-2'/></a></Link></li>
    <li><Link href="/"><a className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Feedback <RiFeedbackLine className='mt-1 ml-2'/></a></Link></li>
    <li><a className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Settings <AiOutlineSetting className='mt-1 ml-2'/></a></li>
  
  </ul>
       </div>
      </div>
        </div>
</div>
    </section>
  )
}

export default Header
