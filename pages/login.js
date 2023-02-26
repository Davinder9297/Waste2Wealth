import {BiLogIn} from 'react-icons/bi'

export default function Login(){
    return(<>
    <div className='whologin pb-6 w-full pt-12'>
    <div className=" flex-col h-96 w-80 mx-auto pt-1 bg-white rounded-lg">
<div className="font-s text-gray-600 font-semibold text-xl text-center">Login</div>
<div className="font-s text-gray-600 mt-2 font-semibold text-xs text-center">Welcome to campus chronicles</div>
<div className="flex-col px-3 mt-4 text-xs space-y-1">
<div className='text-gray-600  font-semibold'>User Id</div>
<input type="text" className='outline  outline-1 px-2 rounded-sm py-[6px] w-full outline-gray-300' placeholder="Enter User Id" />
<div className='mt-2 text-gray-600  font-semibold'>Password</div>
<input type="text" className='outline outline-1 rounded-sm py-[6px] px-2 w-full outline-gray-300' placeholder="Enter Password" />
<div className='flex justify-around my-3'>
    <div className='flex-col shadow-2xl w-28 py-2 rounded-lg'>
        <div className='flex justify-center'><img src="student.svg" alt="" /></div>
        <div className='flex text-xs  justify-center font-semibold mt-1'><input className='text-xs ' type="radio" name="profession" id="" /> <div className='ml-1'>STUDENT</div></div>
    </div>
    <div className='my-auto text-gray-600'>Or</div>
    <div className='flex-col shadow-2xl w-28 py-2 rounded-lg'>
        <div className='flex justify-center'><img src="faculty.svg" alt="" /></div>
        <div className='flex text-xs  justify-center font-semibold mt-1'><input className='text-xs ' type="radio" name="profession" id="" /> <div className='ml-1'>FACULTY</div></div>
    </div></div>
<div className='flex bg-black text-white justify-center py-[6px] rounded-md mt-2 space-x-1'><BiLogIn className=' text-base mt-[2px] text-white' /> <button className='flex text-sm'> Login</button>
</div>
</div>
    </div>
    </div>
    </>)
}