"use client";
import { useState } from "react";
import Info from "./components/Info";
import RecentTickets from "./components/RecentTickets";
import Transactions from "./components/Transactions";
const page = () => {
  return (
      <div className="max-w-screen-xl flex flex-col min-h-[100vh] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[2fr_1fr] gap-5 p-5 grid-rows-[auto_1fr] w-full min-h-[100vh]">
          <Info />
          <div className="col-start-2 row-start-1 row-span-2 ">
            <Transactions />
          </div>
          <RecentTickets />
        </div>
      </div>
  );
};
export default page;
