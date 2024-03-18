import Blocklist from "../GroupItems/Blocklist";
import FriendRequest from "../GroupItems/FriendRequest";
import Friends from "../GroupItems/Friends";
import Group from "../GroupItems/Group";
import MyGroup from "../GroupItems/MyGroup";
import User from "../GroupItems/User";

const Home = () => {
  return (
    <div className=" bg-slate-50 h-screen w-[100%] ">
      <div className="flex px-4 w-full">
        <MyGroup />
        <Group />
        <Friends />
      </div>

      <div className="flex px-4">
        <User />
        <FriendRequest />
        <Blocklist/>
      </div>
    </div>
  );
};

export default Home;
