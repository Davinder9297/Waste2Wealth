import { useRouter } from 'next/router'
import React, { useState } from 'react'
import mongoose from 'mongoose'
import Link from 'next/link'
import { parseCookies } from 'nookies'
const Buy = () => {
  const [routerpage, setrouterpage] = useState('')
  const [incard, setincard] = useState('hidden')
  const [innet, setinnet] = useState('hidden')
  const [inupi, setinupi] = useState('hidden')
  const [inemi, setinemi] = useState('hidden')
  let [paymentmethod, setpaymentmethod] = useState('')
  let [email, setemail] = useState('')
  let [nameoncard, setnameoncard] = useState('')
  let [cardnumber, setcardnumber] = useState('')
  let [expirationdate, setexpirationdate] = useState('')
  let [cvc, setcvc] = useState('')
  let [address, setaddress] = useState('')
  let [city, setcity] = useState('')
  let [region, setregion] = useState('')
  let [postalcode, setpostalcode] = useState('')
  let [netbankingoption, setnetbankingoption] = useState('')
  let [upiid, setupiid] = useState('')
  let [showupi, setshowupi] = useState('hidden')
  let [showemi, setshowemi] = useState('hidden')
  let [verifyemi, setverifyemi] = useState('Verify')
  let [verifyupi, setverifyupi] = useState('Verify')
  let router=useRouter();

  let [inputcardnumber, setinputcardnumber] = useState('')

  const handlevalue=(e)=>{
  setpaymentmethod(e.target.value);
  }
const handlesubmit=async(e)=>{
e.preventDefault();
const data={paymentmethod,email,nameoncard,cardnumber,expirationdate,cvc,address,city,region,postalcode,netbankingoption,upiid,inputcardnumber};
  const res=await fetch('http://localhost:3000/api/buy', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body:JSON.stringify(data),
  })
  let response=await res.json();
let q=router.query.q;
  if(data.paymentmethod==='Net banking'){
    router.push(`/otpverification?q=${q}&pay=${data.paymentmethod}`);
  }
  else{
    router.push(`/address?q=${q}&pay=${data.paymentmethod}`);

  }
}

const handleverifyupi=()=>{
  setverifyupi('Verifying..');
  setshowupi('')
  setTimeout(() => {
    setverifyupi('Verified ✓');
    setshowupi('hidden')
  }, 3000);
}
const handleverifyemi=()=>{
  setverifyemi('Verifying..');
  setshowemi('')
  setTimeout(() => {
    setverifyemi('Verified ✓');
    setshowemi('hidden')

  }, 3000);
}

  return (
<section className='w-full h-auto flex justify-center '>
<div className='w-[50%] h-auto '>
    <div className='text-center text-4xl font-semibold animate-pulse my-3 mb-5'>Select a payment method</div>
    <div className='flex justify-center ' >
     <div className='pay flex-col font-semibold py-4 border-1 shadow-2xl rounded-md bg-orange-50 px-5'>
     <div className="flex justify-center text-sm font-medium text-gray-500 mt-1 mb-5">
        <svg className="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        Payment details stored in plain text
      </div>
    

<form action="" method='POST' onSubmit={handlesubmit}>
    <div className='flex mb-3'>
        <label htmlFor="card">
            <input type="radio" id="card" name="payment" value="Card" className='mr-2 ' onChange={handlevalue} onClick={()=>{
          setincard('')
          setinemi('hidden')
          setinupi('hidden')
          setinnet('hidden')
          setupiid('')
setinputcardnumber('')
setnetbankingoption('')

          }}/>
               Add Debit/Credit/ATM Card
        </label>
    </div>
    <div  className={`flex-auto overflow-y-auto ml-2 px-4 mt-3 pb-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24 ${incard}`}>
  <div className="max-w-lg mx-auto">
      <div className="grid grid-cols-12 gap-y-6 gap-x-4">
        <div className="col-span-full">
          <label htmlFor="email-address"  className="block text-sm font-medium text-gray-700">Email address</label>
          <div className="mt-1">
            <input type="email" id="email-address" name="email" value={email}  onChange={(e) => { setemail(e.target.value); }} className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="name-on-card"  className="block text-sm font-medium text-gray-700">Name on card</label>
          <div className="mt-1">
            <input type="text" value={nameoncard}  onChange={(e) => { setnameoncard(e.target.value); }} id="name-on-card" name="name-on-card"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="card-number"  className="block text-sm font-medium text-gray-700">Card number</label>
          <div className="mt-1">
            <input type="text" value={cardnumber}  onChange={(e) => { setcardnumber(e.target.value); }} id="card-number" name="card-number"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-8 sm:col-span-9">
          <label htmlFor="expiration-date"  className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
          <div className="mt-1">
            <input type="text" value={expirationdate}  onChange={(e) => { setexpirationdate(e.target.value); }} name="expiration-date" id="expiration-date"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-4 sm:col-span-3">
          <label htmlFor="cvc"  className="block text-sm font-medium text-gray-700">CVC</label>
          <div className="mt-1">
            <input type="text" value={cvc}  onChange={(e) => { setcvc(e.target.value); }} name="cvc" id="cvc" className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="address"  className="block text-sm font-medium text-gray-700">Address</label>
          <div className="mt-1">
            <input type="text" value={address}  onChange={(e) => { setaddress(e.target.value); }} id="address" name="address"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>
        <div className="col-span-full sm:col-span-4">
          <label htmlFor="city"  className="block text-sm font-medium text-gray-700">City</label>
          <div className="mt-1">
            <input type="text" value={city}  onChange={(e) => { setcity(e.target.value); }} id="city" name="city"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-full sm:col-span-4">
          <label htmlFor="region"  className="block text-sm font-medium text-gray-700">State / Province</label>
          <div className="mt-1">
            <input type="text" value={region}  onChange={(e) => { setregion(e.target.value); }} id="region" name="region"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>

        <div className="col-span-full sm:col-span-4">
          <label htmlFor="postal-code"  className="block text-sm font-medium text-gray-700">Postal code</label>
          <div className="mt-1">
            <input type="text" value={postalcode}  onChange={(e) => { setpostalcode(e.target.value); }} id="postal-code" name="postal-code"  className="block w-full border-gray-300 rounded-md p-1 border-1  shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-2">
        <div className="flex items-center h-5">
          <input id="same-as-shipping" name="same-as-shipping" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"/>
        </div>
        <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
      </div>
    
  </div>
</div>
    <div className='flex mb-3'>
        <label htmlFor="net_banking">
            <input type="radio" id="net_banking" name="payment" value="Net banking" onChange={handlevalue}  className='mr-2 ' onClick={()=>{
              setinnet('')
              setincard('hidden')
          setinemi('hidden')
          setinupi('hidden')
          setaddress('')
          setcardnumber('')
          setcity('')
          setemail('')
          setcvc('')
          setexpirationdate('')
          setnameoncard('')
          setpostalcode('')
          setregion('')
          setupiid('')
          setinputcardnumber('')
              }}/>
            Net Banking
        </label>
    </div>
    <div className={`flex ${innet} `}>    
                        <div className="mb-3 w-fit mx-4 mt-3 shadow-xl">
                            <select   className ="form-select   appearance-none block w-full pl-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition   ease-in-out   focus:text-gray-700 focus:bg-white  focus:outline-none" aria-label="Default select example" name='Net banking selection' id='net_banking_selection' value={netbankingoption} onChange={(e)=>{setnetbankingoption(e.target.value)}}>
                                <option defaultValue>Choose an opiton</option>
                                <option  value="Bank of Baroda">Bank of Baroda</option>
                                <option  value="Bank of India">Bank of India</option>
                                <option  value="Bank of Maharashtra">Bank of Maharashtra</option>
                                <option  value="Canara Bank">Canara Bank</option>
                                <option  value="Central Bank of India">Central Bank of India</option>
                                <option  value="Indian Bank">Indian Bank</option>
                                <option  value="Indian Overseas Bank">Indian Overseas Bank</option>
                                <option  value="Punjab and Sind Bank">Punjab and Sind Bank</option>
                            </select>
                        </div>
                    </div>
    <div className='flex mb-1'>
        <label htmlFor="upi" className='py-2'>
            <input type="radio" id="upi" name="payment" value="UPI"  className='mr-2' onChange={handlevalue} onClick={()=>{
              setinupi('')
              setincard('hidden')
          setinemi('hidden')
          setinnet('hidden')
          setaddress('')
          setcardnumber('')
          setcity('')
          setemail('')
          setcvc('')
          setexpirationdate('')
          setnameoncard('')
          setpostalcode('')
          setregion('')
          setnetbankingoption('')
          setinputcardnumber('')
          }}/>
            Other UPI Apps
        </label>
    </div>
    <div className={`mx-4 ${inupi}`} >
        <div className='font-semibold text-gray-700'>Please enter your UPI ID</div>
        <div className='flex my-auto mt-2'>
        <input type="text" placeholder='Ex:mobile@upi' className='p-1 my-auto  border-1 rounded-md shadow-xl border-gray-400 focus:border-gray-500' name='upi_id' id='upi_id' value={upiid} onChange={(e) => { setupiid(e.target.value); }} />
      <div className='bg-orange-500 ml-2 items-center flex px-2 rounded-md font-semibold  hover:bg-orange-600 text-white text-sm '><button onClick={handleverifyupi} type='button'>{verifyupi}</button></div>
        <div className={`h-7 w-7  ${showupi} ml-2`}><img src="/spi.gif" alt="" /></div>
        </div>
    </div>
    <div className={`flex mt-4 `}>
        <label htmlFor="emi">
            <input type="radio" id="emi" name="payment"  value="Emi" className='mr-2 ' onChange={handlevalue} onClick={()=>{
              setinemi('')
              setincard('hidden')
          setinupi('hidden')
          setinnet('hidden')
          setaddress('')
          setcardnumber('')
          setcity('')
          setemail('')
          setcvc('')
          setexpirationdate('')
          setnameoncard('')
          setpostalcode('')
          setregion('')
          setnetbankingoption('')
          setupiid('')
              }}/>
            EMI
        </label>

    </div>
    <div className={`flex ml-5 my-auto items-center mt-2 ${inemi}`}>
        <input type="text" placeholder='Enter card number' className='mx-1 my-auto p-1  border-1 shadow-xl border-gray-400 rounded-md' name='card_number' id='card_number' value={inputcardnumber}  onChange={(e) => { setinputcardnumber(e.target.value); }}/>
        <div className='bg-orange-500 ml-1 items-center flex p-2 rounded-md font-semibold  hover:bg-orange-600 text-white text-sm '><button onClick={handleverifyemi} type='button'>{verifyemi}</button></div>
      <div className={`h-7 w-7  ${showemi} ml-2`}><img src="/spi.gif" alt="" /></div>
    </div>
    <div className='flex mt-4'>
        <label htmlFor="pay_on_delivery">
            <input type="radio" id="pay_on_delivery" name="payment" value="Pay on delivery" onChange={handlevalue} className='mr-2' onClick={()=>{
              setinupi('hidden')
              setincard('hidden')
          setinemi('hidden')
          setinnet('hidden')
          setaddress('')
          setcardnumber('')
          setcity('')
          setemail('')
          setcvc('')
          setexpirationdate('')
          setnameoncard('')
          setpostalcode('')
          setregion('')
          setnetbankingoption('')
          setupiid('')
          setinputcardnumber('')
          }}/>
            Pay on Delivery
         </label>
    </div>
    <div className='font-medium text-gray-500 mx-4 text-sm'>Pay using cash, Paylink (debit, credit card, UPI) or Scan & Pay (Flat INR 25 back on first Amazon Scan & Pay transaction)</div>
<button   className='w-full py-2 bg-orange-500 rounded-md justify-center  text-center mt-8 hover:bg-orange-600 cursor-pointer shadow-xl' type='submit' >Confirm</button>
    </form>
        </div>
    </div>
</div>

</section>
    )
}

export default Buy
// export async function getServerSideProps(context) {
//   let {token}=parseCookies(context)
//   const {res}=context
//   if(!token){
//   res.writeHead(302,{Location:"/login"});
//   res.end()
//   }
//   return {
//     props: {},
//   }
// }
{/* <Link href=> */}