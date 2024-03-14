import { IoMdMore } from "react-icons/io";
import BlocklistItems from "./BlocklistItems";

const Blocklist = () => {
    return (
        <div className="groupItems mt-[20px] ml-4 w-1/3 h-[505px] py-4 px-3 bg-white rounded-xl">
        <div className="flex justify-between items-center mb-4">
         <h2 className="title font-secondary font-semibold text-2xl">Friend Requests</h2>
         <button className=""> 
         <IoMdMore className="text-black text-xl"/> 
         </button>
        </div>
         <BlocklistItems/>
         <BlocklistItems/>
         <BlocklistItems/>
     </div>
    );
};

export default Blocklist;