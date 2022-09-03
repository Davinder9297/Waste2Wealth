import mongoose from 'mongoose'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import {TbCurrencyRupee} from 'react-icons/tb'
import { parseCookies } from 'nookies'
import cookie from 'js-cookie'
const Slug = (props) => {
  let router=useRouter();
  const [id, setid] = useState('');
  const [path, setpath] = useState('');
  const [cart, setcart] = useState('');
  const handlebuy=()=>{
    let {token}=parseCookies();
    let q=router.query.slug;
    if(token){
      setpath(`/buy?q=${q}`)
    }
    else{
      cookie.set('oldpath',`/buy?q=${q}`)
      setpath(`login`)
    }
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    let {token}=parseCookies();
    if(!token){
      let q=router.query.slug;
      cookie.set('oldpath','')
      router.push(`/login?q=${q}`);
    }
    else{
const data={id}
const resp=await fetch('http://localhost:3000/api/cart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await resp.json();
            }
  }
  const [data, setdata] = useState(props.resp)
  return (
    <section className='h-auto w-full justify-center flex mt-20'> 
    <div className='flex w-[90%]  border-1 rounded-2xl shadow-2xl  md:flex-col sm:flex-col xsm:flex-col justify-center' >
        <div className='h-70vh px-2 items-center  2xl:h-full md:h-full justify-center flex w-[50%] '><img src={data.image} className='h-fit 2xl:w-fit   w-fit md:w-fit ' alt="" /></div>
        <div className=' bg-slate-100 p-4 rounded-2xl w-[90%] xsm:w-[100%] sm:mx-auto md:mx-auto   xsm:mx-0 xsm:p-0'>
        <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">{data.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path className='text-orange-500' d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">3.2k Reviews</span>
          </span>
        </div>
        <div className="flex space-x-10 xsm:w-full xsm:justify-between xsm:space-x-0">
          <span className=" font-medium text-3xl text-orange-700 flex xsm:text-2xl"><TbCurrencyRupee className='mt-1 text-3xl xsm:text-2xl'/>{data.price}</span>
          <div className='flex '>
            <a href={`/${path}?q=${data._id}`}><button onClick={handlebuy} className="flex  text-black font-semibold bg-orange-500 border-0 p-2  focus:outline-none hover:bg-orange-600 rounded-xl">Buy now</button></a>
<form action="" method='POST' onSubmit={handlesubmit}><button value={data._id} onClick={(e) => { setid(e.target.value);

}} className="flex text-black font-semibold p-2 bg-orange-300 border-0 focus:outline-none hover:bg-orange-400 rounded-xl ml-2">Add to cart</button>
</form>          
          </div>
        </div>
        <div className='text-lg font-bold my-3 '>About this item</div>
        <p className="flex-wrap text-md w-auto font-medium ">{data.feature}</p>
        <div className="flex mt-6 items-center pb-2 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                         <option>S</option>
                         <option>M</option>
                         <option>L</option>
                         <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path className='text-orange-500' d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
       
        </div>
    </div>
    </section>
  )
}

export default Slug
export async function getServerSideProps(context) {
  mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
  const slug=context.query.slug;
  const data=await fetch(`http://localhost:3000/api/allproducts/${slug}`);
  const resp=await data.json();
  return {
    props: {resp},
  }
}