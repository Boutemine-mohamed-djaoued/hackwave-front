import SideInfo from "./layout/SideInfo";
import ChatBox from "./chat/ChatBox";
import Header from "./layout/Header";
const page = () => {
  return (
    <div className="max-w-screen-xl flex flex-col min-h-[100vh] mx-auto px-4 sm:px-6 lg:px-8">
      <Header></Header>
      <div className="flex gap-10 my-5 flex-grow">
        <SideInfo></SideInfo>
        <ChatBox></ChatBox>
      </div>
    </div>
  );
};
export default page;
