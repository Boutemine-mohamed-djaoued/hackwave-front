"use client";
import { TiHome } from "react-icons/ti";
import { PiCardsFill } from "react-icons/pi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TiTicket } from "react-icons/ti";
import { MdLogout } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SideNav = () => {
  const options = [
    { url: "/client", icon: <TiHome size={35} />, tag: "Dashboard" },
    { url: "/client/transactions", icon: <PiCardsFill size={35} />, tag: "Transactions" },
    { url: "/client/help-center", icon: <FaHandshakeAngle size={35} />, tag: "Help Center" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`z-[999] side-nav px-5 bg-accent flex flex-col justify-around fixed top-0 left-0 h-full shadow-md transition-all duration-300 ${open ? "w-64" : "w-20"}`}>
      {open ? (
        <Image className="big-logo transition-opacity duration-300 delay-150" src="/white-logo.svg" alt="Big Logo" width={150} height={50} />
      ) : (
        <Image className="small-logo" src="/mini-logo.svg" alt="Small Logo" width={75} height={75} />
      )}

      <ul className="text-white">
        {options.map(({ icon, tag, url }, index) => {
          return (
            <li key={index}>
              <Link href={url} className="flex gap-3 items-center text-400 font-semibold my-8">
                {icon}
                {/* Delay the text appearance */}
                <span className={`nav-text transition-opacity duration-300 ${open ? "opacity-100 delay-150" : "opacity-0"}`}>{tag}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-3 text-400 font-semibold text-white items-center">
        <MdLogout size={35} />
        <span className={`logout transition-opacity duration-300 ${open ? "opacity-100 delay-150" : "opacity-0"}`}>Log Out</span>
      </div>
    </div>
  );
};

export default SideNav;
