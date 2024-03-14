import { IoMdMore } from "react-icons/io";


const FriendItems = () => {
    return (
        <div className="flex my-4">
          <div className="flex items-center  gap-4 ">
            <img src="/public/MyGroup1.png" alt="" />
            <h2 className=" text-secondary font-secondary font-bold text-xl">Jenny Wilson</h2>
          </div>
          <button className="ml-auto text-2xl"><IoMdMore/></button>
        </div>
    );
};

export default FriendItems;