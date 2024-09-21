import SideInfo from "../../layout/SideInfo";
import ChatBox from "../../chat/ChatBox";
const page = () => {
  return (
    <div className="flex gap-10 my-5 flex-grow">
      {/* <SideInfo></SideInfo> */}
      <div className="max-w-screen-xl flex flex-col min-h-[100vh] mx-auto px-4 sm:px-6 lg:px-8">
        <ChatBox></ChatBox>
      </div>
    </div>
  );
};
export default page;
