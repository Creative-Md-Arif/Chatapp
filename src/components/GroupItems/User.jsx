/* eslint-disable no-unused-vars */
import React from 'react';

import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import UserItems from './UserItems';


const User = () => {
        return (
            <div className="groupItems w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
               <div className=' sticky top-0'>
               <div className="flex justify-between items-center bg-white py-5 pl-4">
                <h2 className="font-secondary font-semibold text-2xl">User</h2>
                <button className=""> 
                <IoMdMore className="text-black text-xl"/> 
                </button>
               </div>
               <div className="bg-white py-2 pl-4 flex items-center  border-b-[1px] ">
               <FaSearch />
                <input type="text" placeholder="Search"  className=" w-full outline-none pl-4"/>
               </div>
               </div>
               <div className='mt-4'> 
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