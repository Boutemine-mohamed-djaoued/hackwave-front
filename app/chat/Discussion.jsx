import { useChatContext } from "../context/chat";
import { CiLocationArrow1 } from "react-icons/ci";
import { useState } from "react";
const Discussion = () => {
  let responses = [
    "Great to see you today! How can I help?",
    "Generating more leads for your real estate listings can be approached through several effective strategies. Here are some key tips you can implement:Optimize Your Online Presence:nsure your listings are on all major real estate platforms (like Zillow, Realtor.com, etc.)",
    "sorry i can't help you any more"
  ];
  const [inputValue, setInputValue] = useState("");
  const chat = useChatContext();
  const [index, setIndex] = useState(1);
  const [messeges, setMesseges] = useState([
    {
      sender: "ai",
      content: responses[0],
    },
    {
      sender: "you",
      content: chat.value,
    },
  ]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setMesseges([
        ...messeges,
        {
          sender: "you",
          content: inputValue,
        },
        {
          sender: "ai",
          content: responses[index],
        },
      ]);

      setIndex(index + 1);
      setInputValue("");
    }
  };
  return (
    <section className="flex-[3] relative flex flex-col bg-white shadow-md rounded-md p-5">
      {messeges.map(({ sender, content }, index) => {
        return (
          <div className={`${sender == "you" ? "ml-auto" : null}`}>
            <div className={`${sender == "you" ? "text-right" : null}`}>{sender == "you" ? "you" : "AI-agent"}</div>
            <div className={`border-2 max-w-[35rem] my-2 w-fit rounded-xl p-2 ${sender == "you" ? "border-accent text-accent" : null}`} key={index}>
              {content}
            </div>
          </div>
        );
      })}
      <div className="absolute flex bottom-3 border-2 rounded-md gap-2 items-center p-2 w-[calc(100%-2.5rem)]">
        <input type="text" className="w-full" placeholder="Type message" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} />
        <CiLocationArrow1 className="me-2" />
      </div>
    </section>
  );
};
export default Discussion;
