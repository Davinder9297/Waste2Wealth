import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
const otp = () => {
    const router=useRouter();
    let q=router.query.q;
    let pay=router.query.pay;
let {token}=parseCookies();
// if(!token){
//     // router.push('/login');
//     router.push('/login')
// }
  return (
<div className="h-screen py-20 px-3">
    <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full shadow-2xl rounded-xl">
                <div className="bg-white h-auto py-3 rounded text-center ">
                      <h1 className="text-2xl font-bold animate-pulse">OTP Verification</h1>
                      <div className="flex flex-col mt-4">
                          <span className='font-semibold'>Enter the OTP you received at</span>
                          <span className="font-bold">+91 ******665</span>
                      </div>
                      
                      <div id="otp" className="flex flex-row justify-center text-center px-2 mt-3">
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" />
                      </div>
                      <div className='flex-col px-2  '>
                      <div className="flex justify-end text-center mt-0">
                          <a className="flex items-center text-orange-500 hover:text-orange-600 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></a>
                      </div>
                      <Link href={`/address?q=${q}&pay=${pay}`}><div className='w-full mt-2 p-2 bg-orange-500 rounded mx-auto text-white font-medium'><button>Submit</button></div></Link>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>  )
}

export default otp
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