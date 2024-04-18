// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdMoreVert } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import MyGroupItems from './MyGroupItems';

const MyGroup = () => {
  return (
    <div className='mygroupitems w-1/3 h-[505px] bg-gray-700 px-4 rounded-md'>
      <div className=' sticky top-0'>
        <div className='flex justify-between items-center bg-gray-700 pt-4'>
          <h1 className=' text-xl font-primary font-semibold text-white'>My Groups</h1>
          <MdMoreVert  className='text-white text-xl'/>
        </div>
        <div className=" bg-gray-700  py-4 pl-4  flex items-center border-b-[1px]">
          <FaSearch className='text-white' />
          <input type="text" placeholder="Search"  className="bg-gray-700 w-full outline-none pl-4 placeholder:text-white"/>
          </div>
      </div>
      <div className=' overflow-y-auto'>
        <MyGroupItems/>
        <MyGroupItems/>
        <MyGroupItems/>
        <MyGroupItems/>
        <MyGroupItems/>
        <MyGroupItems/>
        <MyGroupItems/>
      </div>
    </div>
  )
}

export default MyGroup
