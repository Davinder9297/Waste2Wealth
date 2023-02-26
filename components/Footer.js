import {BsFacebook,BsLinkedin,BsYoutube,BsTwitter} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import {MdLocationPin} from 'react-icons/md';

export default function Footer(){
    return(<>
    <div className=" flex justify-around mt-2 relative bg-purple-200 py-3 bottom-0">
        <div className="flex-col ">
            <div className='flex justify-center'><img className='h-24' src="ptu-logo-transparent.png" alt="" /></div>
        <div className='text-center font-semibold'> CAMPUS CHRONICLES</div>
        <div className="flex justify-around text-2xl mt-3">
            <button className='text-xl'><BsFacebook/></button>
            <button className='text-2xl'><RiInstagramFill/></button>
            <button className='text-2xl'><BsYoutube/></button>
            <button className='text-xl'><BsLinkedin/></button>
        </div>
        </div>
        <div className='flex-col '>
            <div className='font-semibold text-lg pr-1'>Quick links</div>
            <ul className='text-sm space-y-1 mt-1'>
                <li>Home</li>
                <li>Admissions</li>
                <li>About</li>
                <li>Placements</li>
                <li>Library</li>
            </ul>
        </div>
        <div className='flex-col'>
            <div  className='font-semibold text-lg'>Address</div>
<div className='text-sm space-y-1 mt-1 '>
<div className='flex'> <div className='text-lg mt-[2px] mr-1'><MdLocationPin/></div> <div> C-102/B Phase, 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055</div></div>
<div>Phone - 8283929792</div>
<div>Email - mohalicampus@gmail.com</div>
<div>Timing - Monday to Friday (9am to 5pm) </div>
</div>
        </div>
    </div>
    </>)
}