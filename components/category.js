import React from 'react'
import Link from 'next/link'
const Category = () => {
  return (
<section className='w-full h-auto flex justify-arround xsm:justify-evenly mt-5 '>
    <div className='flex flex-wrap w-full h-auto justify-center xsm:mt-5'>
    <div className='max-w-[1410px]  justify-evenly flex w-full flex-wrap'>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/ele.png" className='w-full h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
  <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Electronics
  </button>
  <ul className="dropdown-menu rounded-md  bg-slate-100" aria-labelledby="dropdownMenuButton1">
    <li><a href="/product?category=electronics" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</a></li>
    <li><a href="/product?type=mobiles" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Refrigerators</a></li>
    <li><a href="/product?type=washing machine" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Washing Machines</a></li>
    <li><a href="/product?type=computers" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Computers</a></li>
    <li><a href="/product?type=laptops" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Laptops</a></li>
    <li><a href="/product?type=bluetooth speakers" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Bluetooth speakers</a></li>
    <li><a href="/product?type=digital cameras" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Digital cameras</a></li>
    <li><a href="/product?type=hair dryers" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Hair dryers</a></li>
  </ul>
        </div>
      </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/footwear.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
  <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Footwear
  </button>
  <ul className="dropdown-menu rounded-md  bg-slate-100" aria-labelledby="dropdownMenuButton1">
    <li><a href="/product?category=footwear" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</a></li>
    <li><a href="/product?type=nike" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Nike</a></li>
    <li><a href="/product?type=relaxo" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Relaxo</a></li>
    <li><a href="/product?type=puma" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Puma</a></li>
    <li><a href="/product?type=paragon" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Paragon</a></li>
    <li><a href="/product?type=adidas" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Adidas</a></li>
  </ul>
        </div>      
        </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/food.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
  <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Grocery
  </button>
  <ul className="dropdown-menu rounded-md  bg-slate-100" aria-labelledby="dropdownMenuButton1">
    <li><a href="/product?category=grocery" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</a></li>
    <li><a href="/product?type=almond" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Almond–Badam </a></li>
    <li><a href="/product?type=apricot" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Apricot–Khubani</a></li>
    <li><a href="/product?type=dates" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Dates–Khajoor</a></li>
    <li><a href="/product?type=walnuts" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Walnuts–Akhrot</a></li>
  </ul>
        </div>       </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/jw.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
  <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Jawellary
  </button>
  <ul className="dropdown-menu rounded-md  bg-slate-100" aria-labelledby="dropdownMenuButton1">
    <li><a href="/product?category=jawellary" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</a></li>
    <li><a href="/product?type=ring" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Ring</a></li>
    <li><a href="/product?type=bracelet" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Bracelet</a></li>
    <li><a href="/product?type=bangles" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Bangle</a></li>
    <li><a href="/product?type=chain" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Chain</a></li>
  </ul>
        </div>       </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/books.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
  <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Books
  </button>
  <ul className="dropdown-menu rounded-md  bg-slate-100" aria-labelledby="dropdownMenuButton1">
    <li><a href="/product?category=books" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</a></li>
    <li><a href="/product?type=action and adventure" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Action and Adventure</a></li>
    <li><a href="/product?type=classics" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Classics</a></li>
    <li><a href="/product?type=comic book" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Comic Book</a></li>
    <li><a href="/product?type=detective and mystery" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Detective and Mystery</a></li>
    <li><a href="/product?type=horror" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Horror</a></li>
  </ul>
        </div>       </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/phone.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
  <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Mobile
  </button>
  <ul className="dropdown-menu rounded-md  bg-slate-100" aria-labelledby="dropdownMenuButton1">
    <li><a href="/product?category=mobile" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</a></li>
    <li><a href="/product?type=samsung" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Samsung</a></li>
    <li><a href="/product?type=xiaomi" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Xiaomi</a></li>
    <li><a href="/product?type=vivo" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Vivo</a></li>
    <li><a href="/product?type=oppo" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >OPPO</a></li>
    <li><a href="/product?type=apple" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Apple</a></li>
    <li><a href="/product?type=tecno" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Tecno</a></li>
  </ul>
        </div>       </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/fashion.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
  <div className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600 " >
  Fashion
  </div>
         </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/toys.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
  <div className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  " >
  Toys
  </div>
       </div>
    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className=''><img src="/travel.jpg" className='w-full h-20 xsm:h-16' alt="" /></div>
  <div className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600 " >
  Travel
  </div>
    </div>
    </div>
    </div>
</section>
    )
}

export default Category