import React from "react"
const Footer = () => {
  return (
<footer className="w-full xsm:h-auto h-48  xsm:flex-col  flex bg-orange-600 mt-10 justify-around 2xl:justify-center 2xl:space-x-56 xl:justify-center xl:space-x-56 ">
<div className="max-w-[1600px]  w-full justify-center  xsm:flex-col  flex xsm:h-auto  ">
    <div className="m-5 inline-flex space-x-56  md:justify-evenly xsm:justify-evenly  bg-orange-600 sm:space-x-20 xsm:space-x-14">
        <div className="flex flex-col cursor-pointer ">
            <div className="active text-white font-bold pb-2 text-lg "><a className="hover:text-orange-200" href="/">Partnership</a></div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Websites</a></div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Social</a> Media</div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Branding</a></div>
        </div>
        <div className="flex flex-col cursor-pointer ">
            <div className="active  text-white font-bold pb-2 text-lg "><a className="hover:text-orange-200" href="/">About</a></div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Our</a> Projects</div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Carrers</a></div>
        </div>
        <div className="flex flex-col cursor-pointer ">
            <div className="active  text-white font-bold pb-2 text-lg "><a className="hover:text-orange-200" href="/">Support</a></div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Support</a> Request</div>
            <div className="text-white pt-1 "><a href="/" className="hover:text-orange-200">Contact</a></div>
        </div>
    </div>
  <div className="bg-orange-600 h-fit relative  mt-2 sm:left-0 sm:pt-3  xsm:justify-center">
    <div className="mx-auto py-4 px-5 flex-wrap xsm:w-full  ">
      <p className="text-white text-md text-center sm:pr-0 sm:text-clip w-full 2xl:justify-start 2xl:text-start lg:text-start lg:pl-0 "><a href="/" className="hover:text-orange-200">All Right Reserved &copy; Copyright 2022</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-2 mt-2 justify-center sm:justify-start  xsm:w-full">
        <a className="text-yellow-100 hover:text-orange-200">
          <svg fill="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path className="cursor-pointer " d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-yellow-100 hover:text-orange-200">
          <svg fill="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path className="cursor-pointer " d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-yellow-100 hover:text-orange-200">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path className="cursor-pointer " d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-yellow-100 hover:text-orange-200">
          <svg fill="currentColor"  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  </div>
</footer>
  )
}

export default Footer
