

const ChatList = () => {
    return (
      <div>
        <div className="flex gap-4 my-4">
         <div>
         <img src="/public/Ellipse 1(1).png" alt="" />
         </div>
         <div className="flex flex-col ">
          <h2 className=" text-secondary font-secondary font-semibold text-xl">Savannah Nguyen</h2>
          <p className=" text-secondary font-secondary font-normal text-[14px]">Hate You.....</p>
         </div>
         <p className="ml-auto">10:30 PM</p>
        </div>
    {/* Line 2 start */}
        <div className="flex gap-4 my-4">
         <div>
         <img src="/public/Ellipse 1(2).png" alt="" />
         </div>
         <div className="flex flex-col ">
          <h2 className=" text-secondary font-secondary font-semibold text-xl">Eleanor Pena</h2>
          <p className=" text-secondary font-secondary font-normal text-[14px]">Need Money.....</p>
         </div>
         <p className="ml-auto">10:30 PM</p>
        </div>
      </div>
    );
};

export default ChatList;