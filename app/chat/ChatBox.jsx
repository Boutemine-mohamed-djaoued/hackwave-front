"use client";
import { chatContext } from "../context/chat";
import { useState } from "react";
import Suggestions from "./Suggestions";
import Discussion from "./Discussion";
const ChatBox = () => {
  const [value, setValue] = useState(null);
  return (
    <chatContext.Provider value={{ value, setValue }}>
      {value ? <Discussion /> : <Suggestions />}
    </chatContext.Provider>
  );
};
export default ChatBox;
