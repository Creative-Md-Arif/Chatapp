import { UserLogo } from "../../../public/Image";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  return (
    <div className=" flex flex-col justify-between h-full">
       <div>
       <div className=" flex items-center gap-2 py-3 pl-3 bg-gray-800">
        <img className=" w-8 rounded-full" src={UserLogo} alt="" />
        <h1 className="text-white text-2xl font-secondary font-medium ">Mohammad Arif</h1>
       </div>
       <div className="">
        <div className="User-1 pl-3 py-3 bg-amber-50"> hello </div>
        <div className="User-2 pr-3 py-3 bg-white text-end "> hi</div>
      </div>
       </div>
      <div className="flex items-center justify-between messege-box px-3 py-3 bg-white">
        <input className="py-2 w-full bg-transparent outline-none text-black placeholder:text-black "
        type="text"
        placeholder="Send a message" />
        <button>
        <IoSend />
        </button>


        </div>
    </div>
  );
};

export default ChatBox;
