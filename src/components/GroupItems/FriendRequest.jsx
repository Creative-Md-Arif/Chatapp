import { IoMdMore } from "react-icons/io";
import FriendRitems from "./FriendRitems";

const FriendRequest = () => {
    return (
        <div className="groupItems w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
              <div className=" sticky top-0">
              <div className="flex justify-between items-center border-b-[1px] bg-white static py-5 pl-4">
                <h2 className="font-secondary font-semibold text-2xl">Friend Requests</h2>
                <button className=""> 
                <IoMdMore className="text-black text-xl"/> 
                </button>
               </div>
              </div>
              <div className="mt-4">
              <FriendRitems/>
               <FriendRitems/>
               <FriendRitems/>
               <FriendRitems/>
              </div>
            </div>
    );
};

export default FriendRequest;