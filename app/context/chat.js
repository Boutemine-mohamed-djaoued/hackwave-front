import { createContext, useContext } from "react";

export const chatContext = createContext();

export function useChatContext() {
  const chat = useContext(chatContext);
  if (chat === undefined) {
    throw new Error("chat is undefined && chatContext need a provider");
  }
  return chat;
}
