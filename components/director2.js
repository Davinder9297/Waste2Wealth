import {ImQuotesRight,ImQuotesLeft} from 'react-icons/im'
export default function Director2(){
    return (<>
    <div className="flex justify-center my-3 py-5 bg-purple-100 shadow-2xl  h-96">
        <div className="flex"> <img className="rounded-full h-52" src="director.jpg" alt="" /></div>
        <div className="flex-col ml-20">
            <div className='text-2xl font-bold text-cyan-500 font-serif'>Dr. Monika Sachdeva</div>
            <div className='text-xl font-semibold text-gray-500 font-jass'>Director</div>
            <div className="flex-col w-96 mt-2 ">
                <button className='text-2xl'><ImQuotesLeft/></button>
                <div className=' text-lg'><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus consectetur facilis, rerum, mollitia illo repellat ipsum ea eius, autem placeat excepturi in repellendus blanditiis reprehenderit iusto neque quibusdam. Cupiditate, nobis!</i></div>
               <div className='flex text-2xl justify-end '><button className=''><ImQuotesRight/></button></div>
                </div>
        </div>
    </div>
    </>)
}