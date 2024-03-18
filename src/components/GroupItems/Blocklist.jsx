import { IoMdMore } from "react-icons/io";
import BlocklistItems from "./BlocklistItems";

const Blocklist = () => {
  return (
    <div className="groupItems mt-[20px] ml-4 w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
      <div className=" absolute right-9">
        <div className="flex justify-between items-cente bg-white static pl-12 py-5 w-[500px] rounded-sm shadow-xl">
          <h2 className="title font-secondary font-semibold text-2xl">
            Blocklist
          </h2>
          <button className="">
            <IoMdMore className="text-black text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-20 ">
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
        <BlocklistItems />
      </div>
    </div>
  );
};

export default Blocklist;
