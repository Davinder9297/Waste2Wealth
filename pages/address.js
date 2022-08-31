import React, { useState } from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
const Adress = (props) => {
  const [alldata, setalldata] = useState(props.res)
  const [pay, setpay] = useState(props.pay);
  let d=new Date();
  // console.log(d.getUTCMonth());
  // console.log(pay);
  const handlesubmit=async(e)=>{
    e.preventDefault()
  }
  return (
    <section className='w-full h-auto flex  justify-center '>
      <div className='w-[85%] h-auto flex-col mt-3 py-4 '>
        <div className='h-auto w-full flex justify-around border rounded py-5'>
          <div className='w-72 h-auto shadow-lg bg-orange-50 rounded flex-col p-3'>
            <div className='font-bold'>Shipping address<a href="/buy" className='ml-1 text-blue-700 text-sm mt-auto font-medium'>Change</a></div>
            <div className='text-gray-700 text-sm'>
              <div>Davinder Giri</div>
              <div>Machhli Kalan Teh. Kharar, Distt. Mohali</div>
              <div>Phone: 8283929792</div>
            </div>
          </div>
          <div className='w-72 h-auto shadow-lg bg-orange-50 rounded p-2'>
            <div className='font-bold'>Payment Method <a href="/buy" className='ml-1 text-blue-700 text-sm mt-auto font-medium'>Change</a></div>
            <div className='flex text-gray-700 mt-1 text-sm'>{pay}</div>
          </div>
          <div className='w-72 h-auto shadow-lg bg-orange-50 rounded flex-col p-2'>
            <div className='font-bold'>Gift cards, Voucher and Promotional codes</div>
            <div className='flex items-center mt-2'>
              <input type="text" className='p-1 border rounded' placeholder='Enter code' />
              <button className='p-2 ml-1 bg-gray-300 rounded-md text-sm' >Apply</button>
            </div>
          </div>
        </div>
        <div className='h-auto w-full pl-12 mt-4 border rounded py-5 bg-orange-50'>
          <div className='font-bold text-green-700 text-lg'>Delivery date: d</div>
          <div className='text-gray-600 font-medium'>If you order in the next 3 hours and 38 minutes (<a href="" className='text-blue-700'>Details</a>)</div>
         
          <div className='flex justify-between h-full mt-3'>
            <div className=' h-auto  flex justify-between'>
              <div className='w-24 h-24 bg-slate-400  flex justify-center items-center '><img src={alldata.image} alt="" className=' ' /></div>
              <div className='h-auto  px-2 w-96'>
                <div className='font-bold  h-auto break-words '>{alldata.title}</div>
                <span ><s className='text-gray-500'>₹{alldata.oldprice}</s> <span className='text-orange-600 text-lg font-semibold'>₹{alldata.price}</span></span>
                <div>Quantity: 1 <a href="/buy" className='ml-1 text-blue-700 text-sm mt-auto font-medium'>Change</a></div>
              </div>
            </div>
            <div className='w-96 h-auto flex-col'>
              <div className='font-bold'>Delivery Method: <span className='text-gray-600 font-normal'>Standard Delivery</span> <a href="/buy" className='ml-1 text-blue-700 text-sm mt-auto font-medium'>Change</a></div>
              <div className='font-bold mt-3'>Arrival Window:</div>
              <div>Wednesday, 24 Aug <a href="/buy" className='ml-1 text-blue-700 text-sm mt-auto font-medium'>Change</a></div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto  flex justify-center mt-4 '>
              <div className='w-full bg-orange-50 flex-col rounded-lg shadow-xl mb-2 px-5 border'>
                <div className=' font-bold text-3xl mb-3 text-center'>Order summary</div>
                
                <div className='w-full h-auto flex justify-between ' >
                  <div className='text-lg tracking-wider font-medium text-gray-500 font-o p-2'>Subtotal</div>
                  <div className='font-bold text-gray-600 text-lg flex items-center'>₹0</div>

                </div>     
                
                <hr />  

                <div className='w-full h-auto flex justify-between' >
                  <div className='text-lg tracking-wider font-medium text-gray-500 font-o p-2'>Shipping</div>
                  <div className='font-bold text-gray-600 text-lg flex items-center'>₹0</div>
                </div>     
                <hr /> 

                <div className='w-full h-auto flex justify-between' >
                  <div className='text-lg tracking-wider font-medium  text-gray-500 font-o p-2'>Tax</div>
                  <div className='font-bold text-gray-600 text-lg   flex items-center'>₹0</div>

                </div>     
                <hr />         
                <div className='w-full h-auto flex justify-between' >
                  <div className='text-xl tracking-wider font-semibold font-o p-2'>Order total</div>
                  <div className='font-bold text-gray-900 text-xl flex items-center'>₹0</div>

                </div>     
                <hr /> 

                <div className='w-full h-auto my-4' >
                  <form action="" method='POST' onSubmit={handlesubmit}>
                  <Link href="/orderplaced"><div className='text-white cursor-pointer bg-orange-500 py-2.5 w-full text-center text-xl rounded-lg'><button type='submit' >Place your order</button></div></Link>

                  </form>
                </div>                   
              </div>
            </div>      </div>
    </section>
  )
}

export default Adress
export async function getServerSideProps(context) {
  let q=context.query.q;
  let pay=context.query.pay;
  mongoose.connect("mongodb://localhost:27017/magento");
  const data=await fetch(`http://localhost:3000/api/allproducts/${q}`);
  const res=await data.json();
  return {
    props: {res,pay},
  }
}
