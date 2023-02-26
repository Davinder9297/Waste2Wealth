import React,{ useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { IoNotificationsCircleSharp} from 'react-icons/io5'
import { IoMdHelpCircleOutline} from 'react-icons/io'
import { FaUserCircle} from 'react-icons/fa'
import { CgProfile} from 'react-icons/cg'
import { TbCheckupList} from 'react-icons/tb'
import { BiLogIn,BiLogOut} from 'react-icons/bi'
import {RiFeedbackLine} from 'react-icons/ri'
import { AiOutlineSetting} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {ImWarning} from 'react-icons/im'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
const Header = () => {
  let [showou, setshowou] = useState('')
  let [showin, setshowin] = useState('')
  let router=useRouter()

  const handleprofile=()=>{
 let {token}=parseCookies();
  if(token){
    router.push('/profile')
  }
  else{
    cookie.set('oldpath','/profile')
    router.push('/login')
  }
  } 

  const handleorders=()=>{
 let {token}=parseCookies();
  if(token){
    router.push('/orders')
  }
  else{
    cookie.set('oldpath','/orders')

    router.push('/login')
  }
  } 

  const yesbutton=()=>{
    cookie.remove('token')
    cookie.set('oldpath','/');
    router.push('/login')
  }

  const ab=()=>{
cookie.set('oldpath','/')
  }
  const just=()=>{
    let {token}=parseCookies();
    if(token){
    setshowin('hidden')
setshowou('')
    }
    else{
      setshowou('hidden')
      setshowin('')
    }  }
  return (<>

<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-orange-100">
      <div className="modal-header">
        <h5 className="modal-title font-semibold flex text-xl  items-center" id="exampleModalLabel"><ImWarning className='mr-2 text-2xl' />Confirmation</h5>
        <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose/></button>
      </div>
      <div className="modal-body font-medium text-md ">
        Are you sure to log out?
      </div>
      <div className="modal-footer">
        <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
        <button onClick={yesbutton} type="button" className="btn font-medium  bg-orange-500 "  data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
</div>
 
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
  <button className=" inline-flex text-2xl pt-2 text-orange-600   hover:text-orange-600 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={just}>
  <FaUserCircle />
  </button>
  <ul className="dropdown-menu rounded-md bg-slate-100 " aria-labelledby="dropdownMenuButton1">
    <li> <button onClick={handleprofile} className="dropdown-item flex hover:bg-orange-400 font-medium text-center">Your Profile <CgProfile className='mt-1 ml-2'/></button></li>
    <li> <button onClick={handleorders} className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Your Orders <TbCheckupList className='mt-1 ml-2'/></button></li>
    <li className={`${showin}`}><Link href="/login" ><a onClick={ab} className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Login <BiLogIn className='mt-1 ml-2'/></a></Link></li>
    <li className={`${showin}`}><Link href="/registeration"><a className="dropdown-item hover:bg-orange-400 font-medium text-center flex">Register <BiLogIn className='mt-1 ml-2'/></a></Link></li>
    <li className={`${showou} hover:bg-orange-400 dropdown-item `}><button type="button" className=" font-medium text-center flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Log out <BiLogOut className='mt-1 ml-2'/>
</button></li>  
  </ul>
       </div>
      </div>
        </div>
</div>
    </section>
    </>
  )
}

export default Header
