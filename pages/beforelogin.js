export default function Whologin(){
    return(<>
    <div className="h-screen flex-col w-full whologin">
        <div className="text-white font-bold text-center pt-10 text-3xl font-serif">Login As</div>
        <div className="flex justify-center mt-32">
            <div className="h-32 w-32 rounded-tr-3xl rounded-bl-3xl  bg-white flex-col">
<div className="flex justify-center"><img className="pt-3" src="student.svg" alt="" /></div>
<div className="text-center text-xs pt-2 text-gray-700 font-bold">STUDENT</div>
            </div>
            <div className="h-32 ml-28 w-32 rounded-tr-3xl rounded-bl-3xl  bg-white flex-col">
<div className="flex justify-center"><img className="pt-3" src="faculty.svg" alt="" /></div>
<div className="text-center text-xs pt-2 text-gray-700 font-bold">FACULTY</div>
            </div>
        </div>
    </div>
    </>)
}