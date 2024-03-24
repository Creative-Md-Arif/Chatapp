import { IoMdMore } from "react-icons/io";
import BlocklistItems from "./BlocklistItems";

const Blocklist = () => {
  return (
    <div className="groupItems w-1/3 h-[500px] pb-4 px-3 bg-white rounded-xl">
      <div className=" absolute">
        <div className="flex justify-between static items-center bg-white py-5 pl-4 border-b-[1px]">
          <h2 className="title font-secondary font-semibold text-2xl">
            Blocklist
          </h2>
          <button className=" pl-[360px]">
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
