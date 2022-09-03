import React, { useState } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import {HiOutlineRefresh} from 'react-icons/hi'
import {BsCart4} from 'react-icons/bs'
import mongoose from 'mongoose'
import Link from 'next/link'
const Trail = (props) => {
  const [allcart, setallcart] = useState(props.res);
  const [product, setproduct] = useState(props.product);
  const [id, setid] = useState('');
  let tt=0;
  let tcount=0;
  let finalitem=1;
  return (
    <section className='w-full h-auto justify-center flex min-h-screen'>
        <div className='w-[90%] h-fit  shadow-2xl mt-5 rounded-lg  justify-center max-w-[1210px]'>
          <div className='text-5xl font-medium font-p flex justify-center animate-pulse'>Shopping cart <BsCart4 className='ml-2'/></div>
            <div className='w-full flex-col justify-center h-auto mt-4'>
            {allcart.map((element)=>{
            const [count, setcount] = useState(element.count)
            const [image, setimage] = useState(element.image)
            let t=element.price.replace(',','');
            const [totalprice, settotalprice] = useState(element.totalprice);
            const [dis, setdis] = useState('');
            const [show, setshow] = useState('');

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
const handledelete=async(e)=>{
  e.preventDefault();
  let data={id};
  console.log(data);
  const res=await fetch('http://localhost:3000/api/cart/delete', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              e.preventDefault();

              let response=await res.json();

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
  <div key={element._id} className={`flex cursor-pointer w-full justify-between shadow-lg hover:bg-orange-50 mx-auto mb-3 ${show}`}>
<div className='w-56 h-28 my-auto  '><img src={element.image} className='h-fit mx-auto  w-24 rounded-xl' alt="" /></div>
<div className='flex-col h-auto  w-full '>
<Link passHref={true} key={element._id} href={`product/${element.productid}`}><div className='flex-wrap h-full max-w-xl w-6/7  flex items-center mx-auto font-bold text-md text-gray-800' >{element.title}</div></Link>
</div>
<div className="flex  h-auto w-1/6 mr-3  my-auto justify-center xsm:w-80 xsm:mr-0 sm:w-[200px] sm:ml-1 md:w-[210px]">
<form action="" method='POST' onSubmit={handlesubmit}>
              <button className={`cursor-pointer ${dis}`} type="submit" onClick={handledec}  value={count} ><svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg></button>
              <input className="mx-2 border text-center w-10"   type="number" readOnly value={count}/>
            <button className='cursor-pointer' type='submit' onClick={handleinc} value={count} >  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg></button>
              </form>
            </div>
<div className='flex-col space-y-24'>
<form action="/cart" method='POST' onSubmit={handledelete}><div className='text-3xl text-center mt-2'><button onClick={()=>{setid(element._id);
  setshow('hidden');
  // tt=tt-totalprice;
}}  type='submit' ><MdDeleteForever/></button></div>
</form>
        <div className='font-bold text-lg mr-3'>₹{totalprice}</div>
                 </div>
                </div>
                
)
})}
               
            </div>
            <div className='w-full h-auto  flex justify-center mt-5'>
              <div className='w-2/4 bg-orange-100 flex-col rounded-lg shadow-xl mb-2'>
                <div className='flex w-full justify-around'>
                <div className=' font-bold text-3xl mb-3 text-center'>Order summary</div>
              <a href="/cart" className='my-auto text-2xl hover:text-orange-500'><HiOutlineRefresh/></a>
                </div>
                
                <div className='w-full h-auto flex justify-between' >
                  <div className='text-lg tracking-wider font-medium text-gray-500 font-o p-2'>Subtotal</div>
                  <div className='font-bold text-gray-600 text-lg flex items-center'>₹{tt}</div>

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
                  <div className='font-bold text-gray-700 text-xl flex items-center'>₹{tt}</div>

                </div>     
                <hr /> 

                <div className='w-full h-auto flex justify-between mt-4' >
                 <div className='text-white bg-orange-500 py-2.5 w-full text-center text-xl rounded-lg'><button>Proceed to buy</button></div>
                </div>  
                <div className='flex justify-center mt-3'>
                  <div className='text-gray-500'>or</div>
                  <div className='ml-2 text-orange-500 font-medium '><Link href="/product"><a className='hover:text-orange-600'>Continue Shopping &rarr;</a></Link></div>
                  </div>
       
              </div>
            </div> 
        </div>
    </section>
  )
}

export default Trail
export async function getStaticProps() {
  mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
  const data=await fetch('http://localhost:3000/api/cart');
  const res=await data.json();
  return {
    props: {res},
  }
}
