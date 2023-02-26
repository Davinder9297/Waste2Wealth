export default function Events(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];
let s=d.getDate()+" "+name+" "+d.getFullYear();
    return (<>
    <div className="flex-col mt-8 mb-5">
<div className="text-center text-3xl font-semibold font-serif text-gray-600">Events At Campus</div>
<div className="flex justify-center"><img src="hr.png" alt="" /></div>
<div className="flex flex-wrap w-full h-auto justify-evenly mt-4 ">
<div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5  hover:scale-90 transition duration-300 ease-in">
    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
    <div className="flex justify-between">
        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
    </div>
    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
</div>
<div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
    <div className="flex justify-between">
        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
    </div>
    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
</div>
<div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
    <div className="flex justify-between">
        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
    </div>
    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
</div>
<div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
    <div className="flex justify-between">
        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
    </div>
    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
</div>
<div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
    <div className="flex justify-between">
        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
    </div>
    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
</div>
<div className="flex-col h-[420px] border-2 w-[350px] shadow-2xl rounded-lg mb-5 ">
    <div className=""><img className="rounded-t w-[350px] h-52" src="e1.jpg" alt="" /></div>
    <div className="flex justify-between">
        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
    </div>
    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white"><button>View more images</button></div>
</div>
</div>
    </div>
    </>)
}