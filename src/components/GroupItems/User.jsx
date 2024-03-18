/* eslint-disable no-unused-vars */
import React from 'react';

import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import UserItems from './UserItems';


const User = () => {
        return (
            <div className="groupItems mt-[20px] w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
               <div className=' absolute'>
               <div className=" flex justify-between items-cente bg-white static pl-4 py-5 w-[495px] rounded-sm shadow-xl">
                <h2 className="font-secondary font-semibold text-2xl">User</h2>
                <button className=""> 
                <IoMdMore className="text-black text-xl"/> 
                </button>
               </div>
               <div  className="bg-white py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center">
               <FaSearch />
                <input type="text" placeholder="Search"  className="w-full outline-none pl-2"/>
               </div>
               </div>
               <div className='mt-32'> 
               <UserItems/>
               <UserItems/>
               <UserItems/>
               <UserItems/>
               <UserItems/>
               <UserItems/>
               <UserItems/>
               </div>
            </div>
        );
};

export default User;