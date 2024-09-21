"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Queue from "./components/Queue";
import Info from "./components/Info";
import Trace from "./components/Trace";
import Transactions from "../client/components/Transactions";
import { ticketContext , useticketContext} from "../context/ticket";
import { Skeleton } from "../../components/ui/skeleton";

const page = () => {
  const [socket, setSocket] = useState(null);
  const [value, setValue] = useState(null);
  useEffect(() => {
    const socketInstance = io("http://192.168.169.244:3000");
    console.log("socketInstance", socketInstance);
    // Handle the socket connection
    socketInstance.on("connect", () => {
      console.log("Connected to socket server:", socketInstance.id);
    });

    // Listen for messages
    socketInstance.on("ticketAssigned", (data) => {
      console.log("Received ticketu:", data);
      setValue(data);
    });

    // Cleanup on component unmount
    return () => {
      if (socketInstance) socketInstance.disconnect();
    };
  }, []);
  return (
    <ticketContext.Provider value={{ value, setValue }}>
    <div className="max-w-screen-xl flex flex-col min-h-[100vh] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[50rem] grid gap-5 py-10 grid-cols-3 grid-rows-2">
        <div className="row-span-2">
          <Queue />
        </div>
        <div className="col-start-2">
          <Info />
        </div>
        <div className="col-start-3 row-span-2">
          {value ? <Transactions /> : <Skeleton className="w-full h-full" />}

        </div>
        <div className="col-start-2 row-span-2">
          <Trace />
        </div>
      </div>
    </div>
    </ticketContext.Provider>
  );
};
export default page;
