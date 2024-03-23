/* eslint-disable no-unused-vars */
import React from 'react';

import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import GroupItems from './GroupItems';


const MyGroup = () => {
        return (
            <div className="groupItems w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
               <div className=' absolute'>
               <div className="flex justify-between items-center bg-white static py-5 pl-4 w-[495px]">
                <h2 className="title font-secondary font-semibold text-2xl">My Group</h2>
                <button className=""> 
                <IoMdMore className="text-black text-xl"/> 
                </button>
               </div>
               <div className="bg-white py-2 pl-4  flex items-center ">
               <FaSearch />
                <input type="text" placeholder="Search" className=" w-full outline-none pl-4"/>
               </div>
               </div>
               <div className='mt-32'>
               <GroupItems/>
               <GroupItems/>
               <GroupItems/>
               <GroupItems/>
               <GroupItems/>
               <GroupItems/>
               </div>
            </div>
        );
};

export default MyGroup;