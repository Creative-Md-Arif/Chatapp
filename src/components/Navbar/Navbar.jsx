// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";



const Navbar = () => {
    return (
        <nav className='w-[300px] h-auto bg-[#F0F2F5] pl-[24px] pt-12 flex flex-col justify-between border-r-2'>
           <div>
            <div className='mainLogo w-12 pb-4'>
               <img src="/public/Chat-logo.jpg" alt="" />
            </div>
            <div>
                <ul className='flex flex-col gap-4 font-secondary font-normal text-xl text-secondary'>
                    <li className=' bg-[#2d3ba7] w-fit py-3 px-5 rounded-2xl text-primary'>
                        <Link to="/" className='flex items-center gap-3'> 
                        <FaHome />
                        <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat" className='flex items-center gap-3'>
                         <CiChat2 />
                         <span>Chat</span>
                         </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3'>
                         <FaUser/>
                         <span>User</span>
                        </Link>
                    </li>
                </ul>
            </div>
           </div>
            <div className='user text-start pb-8 font-secondary font-normal text-xl text-secondary'>
                <h1>Mohammad</h1>
            </div>
            
        </nav>
    );
};

export default Navbar;