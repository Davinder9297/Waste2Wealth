import Link from "next/link";

import Carousal from "../components/carousal";

export default function Home() {
  
  return (<>
   <div className="min-h-screen mt-5"> 
<Carousal/>
<div className="h-auto w-full mt-5 flex flex-wrap justify-center">
  <div className="text-center text-gray-700 h-auto text-4xl w-full font-s animate-pulse mb-5">Top offers</div>
  <div className="max-w-[1410px] justify-center flex">
  <div className="w-[90%] flex flex-wrap justify-evenly cursor-pointer">
    <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o1.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o2.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o3.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o4.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o5.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o6.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o7.jpg" alt="" /></div></Link>
  <Link href="/"><div className="h-[220px] shadow-lg hover:scale-90 transition duration-300 ease-in-out  w-64 mb-5"><img className="h-full rounded-lg w-full" src="/o8.jpg" alt="" /></div></Link>
  </div>
  </div>
</div> 
<div className="chooseus h-auto w-full mt-3 justify-center flex flex-wrap ">
<div className="text-center text-gray-700  w-full text-4xl font-s animate-pulse">Why Choose Magento?</div>
<div className="max-w-[1359px] justify-center flex">
<div className="flex flex-wrap justify-evenly mt-5 w-[72%] ">
  <div className="h-64 w-60 mx-1 mb-5 border-2 shadow-2xl rounded-2xl">
    <div className="w-ful h-32 flex justify-center "><img className="h-full rounded-3xl w-36" src="/nocost.jpg" alt="" /></div>
    <div className="text-center mt-1 text-2xl font-p text-orange-600  hover:text-orange-500 cursor-pointer ">No Cost EMI</div>
    <div className="text-center font-serif mt-1">You can pay for a product or service in affordable monthly instalments with zero interest</div>
  </div>
  <div className="h-64 w-60 mx-1 mb-5 border-2 shadow-2xl rounded-2xl">
    <div className="w-ful h-32 flex justify-center "><img className="h-full rounded-3xl w-36" src="/exchange.jpg" alt="" /></div>
    <div className="text-center mt-1 text-2xl font-p text-orange-600  hover:text-orange-500 cursor-pointer">Exchange Offers</div>
    <div className="text-center font-serif mt-1"> Exchange your old mobile for a new mobile at the right prices</div>
  </div>
  <div className="h-64 w-60 mx-1 mb-5 border-2 shadow-2xl rounded-2xl">
    <div className="w-ful h-32 flex justify-center "><img className="h-full rounded-3xl w-36" src="/debit.jpg" alt="" /></div>
    <div className="text-center mt-1 text-2xl font-p text-orange-600  hover:text-orange-500 cursor-pointer">EMI With Debit Card</div>
    <div className="text-center font-serif mt-1">You don’t need to apply for a credit card anymore just for the EMI option just use debit card</div>
  </div>
  <div className="h-64 w-60 mx-1 mb-5 border-2 shadow-2xl rounded-2xl">
    <div className="w-ful h-32 flex justify-center "><img className="h-full rounded-3xl w-36" src="/cash.jpg" alt="" /></div>
    <div className="text-center mt-1 text-2xl font-p text-orange-600  hover:text-orange-500 cursor-pointer">Cash On Delivery</div>
    <div className="text-center font-serif mt-1">Pay at the time of delivery rather than using credit</div>
  </div>
  <div className="h-64 w-60 mx-1 mb-5 border-2 shadow-2xl rounded-2xl">
    <div className="w-ful h-32 flex justify-center "><img className="h-full rounded-3xl w-36" src="/large.jpg" alt="" /></div>
    <div className="text-center mt-1 text-2xl font-p text-orange-600  hover:text-orange-500 cursor-pointer">Large Appliances Delivery</div>
    <div className="text-center font-serif mt-1">You can buy any large appliances like cooler,tv,washing machine etc. at cheap price </div>
  </div>
  <div className="h-64 w-60 mx-1 mb-5 border-2 shadow-2xl rounded-2xl">
    <div className="w-ful h-32 flex justify-center "><img className="h-full rounded-3xl w-36" src="/delivery.jpg" alt="" /></div>
    <div className="text-center mt-1 text-2xl font-p text-orange-600 font-medium  hover:text-orange-500 cursor-pointer">Free Delivery</div>
    <div className="text-center font-serif mt-1">Free delivery on every order,no need to pay for order</div>
  </div>
</div>
</div>
</div>
</div>
  </>
  )
}
