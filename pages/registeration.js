import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const handlesubmit=async (e)=>{
        e.preventDefault();    
    const data={firstname,lastname,email,password,cpassword,address,phone}
        if(data.password!==data.cpassword){
            toast.warning('Passwords must be same', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
                });
        }
        else{
            const res=await fetch('http://localhost:3000/api/registeration', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json();
              if(response.error){
                toast.warn('Email already exists', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                    });
              }
              else{
                toast.success('Registeration complete successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                    });
              }
              
        }
        
        }
  return ( <>
  <div>  <ToastContainer
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
    </div>

    <div className="max-w-md xsm:mx-2 justify-around mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
    <h1 className="text-4xl font-medium text-center font-s">Register Now</h1>
    <p className="text-slate-500  font-semibold text-center mt-2 animate-pulse">Welcome to Magento</p>
    <form action="/" method='POST' onSubmit={handlesubmit} className="my-4">
        <div className="flex flex-col space-y-4">
            <label htmlFor="firstname">
                <p className="font-medium text-slate-700 pb-2">First Name</p>
                <input required={true} value={firstname}  onChange={(e) => { setfirstname(e.target.value); }} id="firstname" name="firstname" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your firstname"/>
            </label>
            <label htmlFor="lastname">
                <p className="font-medium text-slate-700 pb-2">Last Name</p>
                <input required={true} value={lastname} onChange={(e) => { setlastname(e.target.value); }} id="lastname" name="lastname" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your lastname"/>
            </label>
            <label htmlFor="address">
                <p className="font-medium text-slate-700 pb-2">Shipping address</p>
                <input required={true} value={address} onChange={(e) => { setaddress(e.target.value); }} id="address" name="address" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your shipping address"/>
            </label>
            <label htmlFor="phone">
                <p className="font-medium text-slate-700 pb-2">Phone</p>
                <input required={true} value={phone} onChange={(e) => { setphone(e.target.value); }} id="phone" name="lastname" type="text" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your phone number"/>
            </label>
            <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email Address</p>
                <input required={true} value={email} onChange={(e) => { setemail(e.target.value); }} id="email" name="email" type="email" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
            </label>
            <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input required={true} value={password} minLength="3"  onChange={(e) => { setpassword(e.target.value); }} id="password" name="password" type="password" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
            </label>
            <label htmlFor="cpassword">
                <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
                <input required={true} minLength="3"  value={cpassword} onChange={(e) => { setcpassword(e.target.value); }} id="cpassword" name="cpassword" type="cpassword" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter confirm password"/>
            </label>
            <button className="w-full py-2 font-medium text-white bg-orange-600 hover:bg-orange-500 rounded-lg border-orange-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Create an account</span>
                </button>            <p className="text-center">Have an account? <Link href="/login"><a className="text-orange-600 font-medium inline-flex space-x-1 items-center ml-2"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></a></Link></p>
        </div>
    </form>
</div> 
</>
)
}

export default Register