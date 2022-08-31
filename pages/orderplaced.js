import React from 'react'
import Link from 'next/link'
const orderplaced = () => {
  return (
<section className='w-full h-auto flex justify-center mt-4'>
    <div className='w-[60%] h-auto p-5 bg-orange-100 shadow-2xl rounded xsm:w-[85%]'>
        <div className='text-center font-bold mb-3 text-2xl'>Your order has been placed successfully</div>
       <div className='w-20 h-20 mx-auto animate-pulse'><img src="/correct.jpg" alt="" className='w-fit  rounded-full  h-fit'/></div>
       <div className=' text-center flex-wrap my-2 font-medium'>Thanks for shopping with magento</div>

       <div className=' text-center flex-wrap my-2'>Your order ID is : a58a6fg8e2w698</div>
       <div className=' text-center flex-wrap my-2'>You will receive an order confirmation email with details of your order</div>
        <div className='bg-orange-500 hover:bg-orange-600 rounded p-2 w-fit mx-auto mt-3 cursor-pointer'><Link href="/product"><a className='text-white font-semibold'>Continue shopping</a></Link></div>   
    </div>
</section>
    )
}

export default orderplaced