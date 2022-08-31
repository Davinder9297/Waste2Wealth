import React, { useState } from 'react'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { parseCookies } from 'nookies';
import jwtDecode from 'jwt-decode';
import mongoose from 'mongoose';
const Profile = (props) => {
 const [data, setdata] = useState(props.response)
  return (
<section className='h-auto mt-4 w-full  justify-center flex'>
    <div className='w-[90%]  flex '>
<div className='h-[400px] w-1/3 border-2 rounded-xl shadow-2xl bg-gray-100 flex-col'>
    <div className='flex justify-center w-full'>
    <div className='h-48 w-48 mt-2'><img src="/dp.jpg" className='w-full h-full rounded-full' alt="" /></div>
    </div>
    <div className='text-3xl font-medium text-gray-700 text-center font-mono mt-2'>{data.firstname} {data.lastname}</div>
    <div className='text-xl font-medium text-gray-700 w-full justify-center mt-4 flex'>Joined on 16 March,2020</div>
    <span className="flex w-full justify-center my-5 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500 mx-2 ">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path className='' d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500 mx-2 ">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path className='' d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500 mx-2 ">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path className='' d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
</div>
<div className='h-[400px] w-2/3 bg-slate-100 ml-4 border-2 rounded-xl shadow-2xl'>
    <div className='text-4xl font-serif font-semibold mt-2 text-center text-gray-500'>Personal Information</div>
   <div className='flex mt-4 bg-slate-100 w-full'>
        <div className='text-md font-bold pl-4'>First Name  </div> 
        <div className='ml-64 text-md  font-medium text-gray-600 underline '>{data.firstname}</div>
   </div>
   <div className='flex mt-4 bg-slate-100 w-full'>
        <div className='text-md font-bold pl-4'>Last Name  </div>
        <div className='ml-[259px] text-md  font-medium text-gray-600 underline'>{data.lastname}</div>
   </div>
   <div className='flex mt-4 bg-slate-100 w-full'>
        <div className='text-md font-bold pl-4'>Email Adress  </div>
        <div className='ml-[244px] text-md  font-medium text-gray-600 underline'>{data.email}</div>
   </div>
   <div className='flex mt-4 bg-slate-100 w-full'>
        <div className='text-md font-bold pl-4'>Contact Details  </div>
        <div className='ml-[226px] text-md  font-medium text-gray-600 underline'>{data.phone}</div>
   </div>
   <div className='flex mt-4 bg-slate-100 w-full'>
        <div className='text-md font-bold pl-4'>Address  </div>
        <div className='ml-[280px] text-md  font-medium text-gray-600 underline'>{data.address}</div>
   </div>
   <div className='ml-44 p-1 w-fit bg-orange-400 rounded-lg font-medium shadow-inner mt-4'><button >Edit Profile</button></div>
</div>
    </div>
</section>
    )
}

export default Profile
export async function getServerSideProps(context) {
  let {token}=parseCookies(context)
  const {res}=context;
  let user=jwtDecode(token);
  let id=user.user;
  if(!token){
  res.writeHead(302,{Location:"/login"});
  res.end()
  }
  mongoose.connect("mongodb://localhost:27017/magento");
  const res1=await fetch(`http://localhost:3000/api/profile?_id=${id}`)
  let response=await res1.json();
    return {
      props: {response},
    }
  }