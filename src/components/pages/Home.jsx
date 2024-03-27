import Blocklist from "../GroupItems/Blocklist";
import FriendRequest from "../GroupItems/FriendRequest";
import Friends from "../GroupItems/Friends";
import Group from "../GroupItems/Group";
import MyGroup from "../GroupItems/MyGroup";
import User from "../GroupItems/User";

const Home = () => {
  return (
    <div className=" bg-slate-50 w-[100%] pt-5">
      <div className=" flex gap-4 px-4 pb-4">
        <MyGroup />
        <Group />
        <Friends />
      </div>

      <div className="flex gap-4 px-4 pb-5">
        <User />
        <FriendRequest />
        <Blocklist />
      </div>
    </div>
  );
};

export default Home;
