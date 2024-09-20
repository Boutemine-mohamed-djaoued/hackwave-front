"use client";
import Image from "next/image";
import Link from "next/link";
import MainButton from "/lib/components/MainButton.jsx";
import { useState } from "react";
const Header = () => {
  const [selected, setSelected] = useState(0);
  const routes = [
    { name: "Home", link: "/" },
    { name: "Our Services", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Feedback", link: "/" },
    { name: "Feedback", link: "/" },
    { name: "HElp Center", link: "/" },
  ];
  return (
    <section>
      <nav className="flex justify-between items-center py-5">
        <Image className="logo" src="logo.svg" alt="" width={150} height={100}></Image>
        <ul className="flex gap-5 font-meduim">
          {routes.map((route, index) => {
            return (
              <li className={`${selected == index ? "text-accent font-semibold" : null}`} key={index}>
                <Link href={route.link} key={index} onClick={() => setSelected(index)}>
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-5">
          <MainButton role="primary" onClick={console.log("he")}>
            Get a New Card{" "}
          </MainButton>
          <MainButton role="secondary" onClick={console.log("me")}>
            Sign In
          </MainButton>
        </div>
      </nav>
      <div className="flex justify-around items-center py-5">
        <Image src="cib.svg" alt="" height={50} width={50}></Image>
        <Image src="banner.svg" alt="" height={100} width={300}></Image>
        <Image src="phone.svg" alt="" height={100} width={100}></Image>
      </div>
    </section>
  );
};
export default Header;
