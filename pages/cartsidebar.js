import React,{ useState } from 'react'
import mongoose from 'mongoose'

const Ex = (props) => {
    const [allcart, setallcart] = useState(props.res);
    const [show, setshow] = useState('')
    let tt=0;
    let tcount=0;
    let finalitem=1;
  return (
    <div className={`relative z-10 `} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> 
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">   
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" onClick={()=>{setshow('hidden')}} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeidth="2" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
    
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
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
return(
    <li className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={element.image} className="h-full w-full object-cover object-center"/>
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div className=''>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3 >
            <a href="#" className='hover:text-orange-500'>{element.title}</a>
          </h3>
          <p className="ml-4 w-auto">₹{totalprice}</p>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm mt-3 ">
      <div className="flex justify-center ">
              <form action="" method='POST' onSubmit={handlesubmit}>
              <button className={`cursor-pointer ${dis}`} type="submit" onClick={handledec}  value={count} ><svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg></button>
              <input className="mx-2 border text-center w-10"   type="number" readOnly value={count}/>
            <button className='cursor-pointer' type='submit' onClick={handleinc} value={count} >  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg></button>
              </form>
            </div>
        <div className="flex">
          <button type="button" className="font-medium text-orange-600 hover:text-orange-500">Remove</button>
        </div>
      </div>
    </div>
  </li>
)
})}
 </ul>
                    </div>
                  </div>
                </div>
    
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{tt}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600">Checkout</a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or <button type="button" className="font-medium text-orange-600 hover:text-orange-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}

export default Ex
export async function getServerSideProps(context) {
  mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
  const data=await fetch(`http://localhost:3000/api/cart`);
    const res=await data.json();
    return {
      props: {res},
    }
  }