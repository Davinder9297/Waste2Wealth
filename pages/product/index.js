import Link from 'next/link';
import React, { useState } from 'react'
import { TbCurrencyRupee} from 'react-icons/tb'
const Product = (props) => {
  const [alldata, setalldata] = useState(props.res)
  return (
<section className=" min-h-screen  mt-20 flex justify-center ">
<div className='flex max-w-[1410px]  flex-wrap justify-evenly w-[95%] bg-slate-50 rounded-xl'>

{alldata.map((element)=>{
 return ( 
  <Link passHref={true} key={element._id} href={`product/${element._id}`}><div className=' w-[55vh] h-auto bg-white flex-col hover:scale-95 transition duration-150 ease-in-out max-h-screen mt-5 shadow-2xl rounded-xl cursor-pointer' key={element._id}>
<div className='h-1/2 w-full justify-center flex rounded-lg'><img className='w-fit h-full' src={element.image} alt="" /></div>
<div className='mt-2 font-bold text-lg p-2 h-auto'>{element.title}</div>
<div className="flex p-2 ">
      <span className="flex items-center ">
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
        <span className="text-gray-600 ml-3 ">33 Reviews</span>
      </span>
      </div>
      <div className='flex text-2xl text-orange-900'><TbCurrencyRupee /><span className='text-xl inline-flex font-semibold'>{element.price}</span> <span className='flex mt-2'><TbCurrencyRupee className='text-sm mt-2'/> <s className='text-sm font-semibold pt-1'>{element.oldprice}</s> </span>
      </div>
      </div>
      
      </Link>
      )
  })}
</div>
</section>
    )
}

export default Product
export async function getServerSideProps(context) {
  const type=context.query.type;
  const category=context.query.category;
  const q=context.query.q;
let res='';
  if(category && !type){
    const data=await fetch(`http://localhost:3000/api/allproducts?category=${category}`);
     res=await data.json();
  }
 else if(!category && type){
  const data=await fetch(`http://localhost:3000/api/allproducts?type=${type}`);
   res=await data.json();
  }
 else if(category && type){
  const data=await fetch(`http://localhost:3000/api/allproducts?category=${category}&type=${type}`);
   res=await data.json();
  }
 else if(q){
  const data=await fetch(`http://localhost:3000/api/search?q=${q}`);
   res=await data.json();
  }
else{
  const data=await fetch(`http://localhost:3000/api/allproducts`);
   res=await data.json();
  }
 
  return {
    props: {res}, // will be passed to the page component as props
  }
}