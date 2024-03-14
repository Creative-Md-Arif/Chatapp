

const UserItems = () => {
    return (
        <div className="flex justify-between items-center gap-4 my-4">
        <div className="flex items-center gap-2">
          <img src="/public/MyGroup1.png" alt="" />
        <div className="flex flex-col ">
          <h2 className=" text-secondary font-secondary font-semibold text-xl">Jenny Wilson</h2>
        </div>
        </div>
         <button>Add</button>
      </div>
    );
};

export default UserItems;