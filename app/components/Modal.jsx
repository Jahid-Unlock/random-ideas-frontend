'use client'

import { useState } from "react";

const Modal = ({handleModal}) => {

    const [show, setShow] = useState(false)

    return ( 
        <div className={`bg-black bg-opacity-20 absolute top-0 left-0 w-full h-full backdrop-blur-[2px] ${show ? 'block' : 'hidden'}`}>
            <div className="py-5 mx-auto px-3 max-w-[500px] flex items-center h-full">
                <div className="bg-white w-full py-6 px-5 rounded-md">
                    <textarea className="w-full ring-1 rounded-sm outline-none px-[14px] py-2 text-sm resize-none focus:ring-blue-600" placeholder="Write Your Idea..." name="" id="" cols="30" rows="7"></textarea>
                    <input type="text" placeholder="Tag" className="w-full ring-1 rounded-sm outline-none h-10 text-sm px-[14px] py-2 mt-4 focus:ring-blue-600"/>
                    <input type="text" placeholder="Username" className="w-full ring-1 rounded-sm outline-none h-10 text-sm px-[14px] py-2 mt-4 focus:ring-blue-600"/>
                    <button 
                        className="h-10 rounded-sm text-center text-sm bg-blue-600 w-full mt-4 text-white font-medium hover:bg-blue-700 duration-200" 
                        type="submit"
                        onClick={()=> setShow(!show)}
                    >Add Your Idea</button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;