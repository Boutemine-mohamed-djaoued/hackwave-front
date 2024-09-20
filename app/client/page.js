import SideInfo from "../layout/SideInfo";
import ChatBox from "../chat/ChatBox";
const page = () => {
  return (
    <div className="flex gap-10 my-5 flex-grow">
      <SideInfo></SideInfo>
      <ChatBox></ChatBox>
    </div>
  );
};
export default page;
