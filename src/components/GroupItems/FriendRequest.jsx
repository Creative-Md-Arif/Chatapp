import { IoMdMore } from "react-icons/io";
import FriendRitems from "./FriendRitems";

const FriendRequest = () => {
    return (
        <div className="groupItems mt-[20px] ml-4 w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
              <div className="absulate">
              <div className="flex justify-between items-cente bg-white static pl-12 py-5 w-[490px] rounded-sm shadow-xl">
                <h2 className="font-secondary font-semibold text-2xl">Friend Requests</h2>
                <button className=""> 
                <IoMdMore className="text-black text-xl"/> 
                </button>
               </div>
              </div>
               <FriendRitems/>
               <FriendRitems/>
               <FriendRitems/>
               <FriendRitems/>
            </div>
    );
};

export default FriendRequest;