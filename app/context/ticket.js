import { createContext, useContext } from "react";

export const ticketContext = createContext();

export function useticketContext() {
  const ticket = useContext(ticketContext);
  if (ticket === undefined) {
    throw new Error("ticket is undefined && ticketContext need a provider");
  }
  return ticket;
}
