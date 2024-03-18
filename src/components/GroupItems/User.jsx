/* eslint-disable no-unused-vars */
import React from 'react';

import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import UserItems from './UserItems';


const User = () => {
        return (
            <div className="groupItems mt-[20px] ml-4 w-1/3 h-[400px] py-4 px-3 bg-white rounded-xl">
               <div className="flex justify-between items-center mb-4">
                <h2 className="title font-secondary font-semibold text-2xl">Group</h2>
                <button className=""> 
                <IoMdMore className="text-black text-xl"/> 
                </button>
               </div>
               <div  className="py-2 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center ">
               <FaSearch />
                <input type="text" placeholder="Search"  className="w-full outline-none pl-2"/>
               </div>
               <div className='items'> 
               <UserItems/>
               <UserItems/>
               <UserItems/>
               <UserItems/>
               </div>
            </div>
        );
};

export default User;