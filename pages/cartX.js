import React, { useState } from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
const Cart = (props) => {
  const [allcart, setallcart] = useState(props.res);
  let tt=0;
  let tcount=0;
  let finalitem=1;
  return (
<div className="container mx-auto mt-10  bg-black rounded-lg">
    <div className="flex xsm:flex-col shadow-2 my-10 bg-slate-500">
      <div className="w-full bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 ">Product Details</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {allcart.map((element)=>{
            const [count, setcount] = useState(element.count)
            const [image, setimage] = useState(element.image)
            let t=element.price.replace(',','');
            const [totalprice, settotalprice] = useState(element.totalprice);
            const [dis, setdis] = useState('');
            tt+=Number(totalprice);
            tcount+=count;
            finalitem=tcount;
const handledec=async()=>{
 setcount(count>1?count-1:1);
 settotalprice(t*(count-1));
  if(count<=2){
    setdis('hidden')
  }
}
const handleinc=async()=>{
  
  setcount(count+1);
 settotalprice(t*(count+1));
  if(count>=1){
    setdis('')
  }
  
}
const handlesubmit=async(e)=>{
  e.preventDefault();
  let data={count,totalprice,image};
  const res=await fetch('http://localhost:3000/api/cart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json(); 
              
};
          return (
            <div className="flex items-center hover:bg-gray-50  -mx-8 px-6 py-5">
            <div className="flex w-2/5 h-auto flex-wrap">
              <div className="w-24">
                <img className="h-24 w-fit" src={element.image} alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{element.title}</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 mt-3 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <form action="" method='POST' onSubmit={handlesubmit}>
              <button className={`cursor-pointer ${dis}`} type="submit" onClick={handledec}  value={count} ><svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg></button>
              <input className="mx-2 border text-center w-10"   type="number" readOnly value={count}/>
            <button className='cursor-pointer' type='submit' onClick={handleinc} value={count} >  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg></button>
              </form>
            </div>
            <span className="text-center  w-1/5  font-semibold text-sm">₹ {element.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">₹ {totalprice}</span>
          </div>
          )
        })}
      <Link href="/"><a  className="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a></Link>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10 bg-red-600">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-bold text-lg  uppercase">Items {finalitem}</span>
          <span className="font-semibold text-lg">₹ {tt}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 rounded px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>₹ {tt}</span>
          </div>
          <button className="bg-gray-500 font-semibold hover:bg-gray-600 py-2 rounded text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>  )
}

export default Cart
export async function getServerSideProps(context) {
  mongoose.connect("mongodb://localhost:27017/magento");
  const data=await fetch(`http://localhost:3000/api/cart`);
  const res=await data.json();
  return {
    props: {res},
  }
}