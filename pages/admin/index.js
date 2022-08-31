import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseCookies } from 'nookies'

const Admin = () => {
    const [category, setcategory] = useState('')
    const [type, settype] = useState('')
    const [title, settitle] = useState('')
    const [feature, setfeature] = useState('')
    const [available, setavailable] = useState('')
    const [oldprice, setoldprice] = useState('');
    const [image, setimage] = useState('');
    const [price, setprice] = useState(''); 
    const handleimage=(e)=>{
        setimage(e.target.files[0]);
    }
    const imageupload=async ()=>{
        const formdata=new FormData()
        formdata.append("file",image);
        formdata.append("upload_preset","mystore")
      const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
        method:"POST",
        body:formdata,
      })
      const res2=await res.json();
   return res2.url;
   
    }
    const handlesubmit=async (e)=>{
        e.preventDefault();
        
       const imageurl=await imageupload()
        let slug=`${category}-${type}-${title}-${imageurl}`;
        toast('Saved successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        const data={category,type,title,feature,available,slug,image:imageurl,price,oldprice}
        const res=await fetch('http://localhost:3000/api/allproducts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data),
          })
          let response=await res.json();
          setavailable('')
          setcategory('')
          setfeature('')
          setimage('')
          setoldprice('')
          setprice('')
          settitle('')
          settype('')
          setimage('')
        
    }
    return (
        <div className="max-w-md xsm:mx-2 justify-around mx-auto my-10 bg-white p-8 rounded-xl  shadow shadow-slate-300">
           <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
            <form action="" method='POST' onSubmit={handlesubmit} className="my-4">
                <div className="flex flex-col space-y-4">
                        <p className="font-medium text-slate-700 ">Item category </p>
                    <div className="flex justify-center ">    
                        <div className="mb-3 xl:w-96">
                            <select value={category} onChange={(e) => { setcategory(e.target.value.toLowerCase()); }}  className ="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition   ease-in-out   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option defaultValue>Choose item category</option>
                                <option value="electronics">Electronics</option>
                                <option value="footwear">Footwears</option>
                                <option value="grocery">Grocery</option>
                                <option value="jawellary">Jawellary</option>
                                <option value="books">Books</option>
                                <option value="mobile">Mobile</option>
                                <option value="fashion">Fashion</option>
                                <option value="toys">Toys</option>
                                <option value="travel">Travel</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="type">
                        <p className="font-medium text-slate-700 pb-2">Item type </p>
                        <input value={type} onChange={(e) => { settype(e.target.value.toLowerCase()); }} id="type" name="type" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>                   
                    <label htmlFor="price">
                        <p className="font-medium text-slate-700 pb-2">Item price </p>
                        <input value={price} onChange={(e) => { setprice(e.target.value); }} id="price" name="price" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>
                    <label htmlFor="oldprice">
                        <p className="font-medium text-slate-700 pb-2">Item old price </p>
                        <input value={oldprice} onChange={(e) => { setoldprice(e.target.value); }} id="oldprice" name="oldprice" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>
                    <label htmlFor="available">
                        <p className="font-medium text-slate-700 pb-2">Item available </p>
                        <input value={available} onChange={(e) => { setavailable(e.target.value); }} id="available" name="available" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>
                    <label htmlFor="image">
                        <p className="font-medium text-slate-700 pb-2">Upload image</p>
                        <input  accept="image/*" onChange={handleimage} id="image" name="image" type="file" className="w-full border border-slate-200 rounded-lg focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>
                    <label htmlFor="title">
                        <p className="font-medium text-slate-700 pb-2">Item title </p>
                        <input value={title} onChange={(e) => { settitle(e.target.value); }} id="title" name="title" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>
                    <label htmlFor="feature">
                        <p className="font-medium text-slate-700 pb-2">Item feature </p>
                        <input value={feature} onChange={(e) => { setfeature(e.target.value); }} id="feature" name="feature" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="" />
                    </label>
                    <button type='submit'  className="w-full py-2 font-medium text-white bg-orange-600 hover:bg-orange-500 rounded-lg border-orange-500 hover:shadow inline-flex space-x-2 item-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    )

}

export default Admin
export async function getServerSideProps(context) {
    let {token}=parseCookies(context)
    const {res}=context
    if(!token){
    res.writeHead(302,{Location:"/login"});
    res.end()
    }
      return {
        props: {},
      }
    }
