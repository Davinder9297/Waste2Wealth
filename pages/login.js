import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import cookie from 'js-cookie'
const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [spinner, setspinner] = useState('hidden')
    const handlesubmit=async (e)=>{
e.preventDefault();
const data={email,password}
const res=await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                  'content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json();
// console.log(response.password);
if(response.error){
    toast.warning('Invaild email address or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
}
else{
    toast.success('Login successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
        setspinner('w-full flex justify-center mt-3');
      setTimeout(() => {
        Router.push('/');
        setspinner('')
      }, 3000);
      cookie.set('token',response.token);
}
    }
  return (
    <>
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
    <div className={`${spinner}`}>
   <img className='h-10 w-10' src="spinner.gif" alt="" />
    </div>
    <div className="max-w-md xsm:mx-2 justify-around backdrop-blur-sm bg-white/30 mx-auto my-10  p-8 rounded-xl  shadow shadow-slate-300">
        <h1 className="text-4xl font-medium text-center font-s">Login</h1>
      <p className="text-slate-500  font-semibold text-center mt-2 animate-pulse">Welcome to Magento</p> 
        <form action=""  method='POST' className="my-4" onSubmit={handlesubmit}> 
            <div className="flex flex-col space-y-4">
                <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                    <input required={true} value={email}  onChange={(e) => { setemail(e.target.value); }} id="email" name="email" type="email" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
                </label>
                <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Password</p>
                    <input required={true} value={password}  onChange={(e) => { setpassword(e.target.value); }} id="password" name="password" type="password" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
                </label>
                <div className="flex flex-row justify-between font-semibold">
                    <div>
                        <label htmlFor="remember" className="">
                            <input type="checkbox" id="remember" className="w-4 h-4 mr-2 border-slate-200 focus:bg-orange-600"/>
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a href="#" className="font-medium text-orange-600">Forgot Password?</a>
                    </div>
                </div>
                <button className="w-full py-2 font-medium text-white bg-orange-600 hover:bg-orange-500 rounded-lg border-orange-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
                </button>
                <p className="text-center">Not registered yet?<Link href="/registeration"><a className="text-orange-600 font-medium inline-flex space-x-1 items-center ml-2"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></Link></p>
            </div>
        </form>
    </div>
    
</> 
)
}

export default Login