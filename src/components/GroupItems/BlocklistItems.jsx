
const BlocklistItems = () => {
    return (
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-1">
          <img src="/public/MyGroup1.png" alt="" />
          <h2 className=" text-secondary font-secondary font-semibold text-xl">Jenny Wilson</h2>
        </div>
         <div className="flex flex-col gap-1 mb-1">
         <button className=" text-white p-1 bg-blue-600 rounded">Unblock</button>
       
         </div>
        </div>
    );
};

export default BlocklistItems;