


const GroupItems = () => {
    return (
        <div className="flex  gap-4 my-4">
          <div>
            <img src="/public/MyGroup1.png" alt="" />
          </div>
          <div className="flex flex-col ">
            <h2 className=" text-secondary font-secondary font-semibold text-xl">Jenny Wilson</h2>
            <p className=" text-secondary font-secondary font-normal text-[14px]">Love You.....</p>
          </div>
          <p className="ml-auto">10:30 PM</p>
        </div>
    );
};

export default GroupItems;