"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Image from "next/image";
import navitem1 from "../Assets/notifications.png";
import navitem2 from "../Assets/contact_support.png";
import Link from "next/link";
import user from "../Assets/user.png";
import { BiCommentDetail } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Page = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };


  return (
    <nav className="Navbar">
      <div className="logo">
        <span className="logoicon">k</span>
        <span className="cname">Kentron</span>
      </div>
      <div className="items">
        <Image src={navitem2} width={30} alt="none" className="comma" />
        <BiCommentDetail className="notifications" size={25} />
        {/* <Image src={navitem1} width={20} alt="none" className="notificationss" /> */}

        {/* <div className="user-container cursor-pointer" onClick={togglePopup}> */}
        <Dropdown className="flex flex-col text-[10px] text-black">
          <DropdownTrigger>
            <Image src={user} width={40} alt="none" className="user" />
          </DropdownTrigger>

          <DropdownMenu
            className="flex w-full h-full flex-col"
            aria-label="Static Actions"
          >
            <DropdownItem
              className="flex items-center flex-1 border-b border-gray-300"
              key="new"
            >
              <div className="flex h-full w-full py-2">
                <p className="flex h-full items-center w-full">
                  <Image
                    src={user}
                    width={45}
                    style={{ height: "5vh" }}
                    alt="none"
                    className="user"
                  />
                </p>
                <p className="flex flex-col h-[4vh] text-black flex-1">
                  <p className="flex w-full mx-2 items-center font-bold">
                  Jennifer steve
                  </p>
                  <p className="flex w-full mx-2 h-full items-center font-normal">
                    <GrStatusGood
                      style={{ marginRight: "2px", marginLeft: "2px" }}
                    />
                    Active
                  </p>
                </p>
              </div>
            </DropdownItem>
            <DropdownItem
              className="flex w-full py-2 border-b justify-around h-[10vh] text-black p-2 lex-col border-gray-300"
              key="copy"
            >
              <p className="flex">Profile</p>
              <p className="flex">Preference</p>
              <p className="flex">Setting</p>
            </DropdownItem>
            <DropdownItem className="flex text-black h-[3vh] p-2" key="edit">
              {" "}
              <Link href="/">
              <p className="flex h-full items-center">
            SignOut
          </p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
          {/* {isPopupVisible && (
            <div className="user-popup">
              <div className="flex w-full h-full flex-col">
                <div className="flex items-center flex-1 border-b border-gray-300">
                  <p className="flex h-full items-center w-[2vw]">
                    <Image
                      src={user}
                      width={40}
                      style={{ height: "5vh" }}
                      alt="none"
                      className="user"
                    />
                  </p>
                  <p className="flex flex-col h-[5vh] text-black flex-1">
                    <p className="flex w-full mx-2 items-center text-sm font-bold">
                      Jennfier steave
                    </p>
                    <p className="flex w-full mx-2 h-full items-center text-sm font-normal">
                      <GrStatusGood
                        style={{ marginRight: "2px", marginLeft: "2px" }}
                      />
                      Active
                    </p>
                  </p>
                </div>
                <div className="flex w-full border-b h-[10vh] text-black justify-around p-2 text-sm flex-col border-gray-300">
                  <p className="flex">Profile</p>
                  <p className="flex">Preference</p>
                  <p className="flex">Setting</p>
                </div>
                <div className="flex text-black text-sm h-[3vh] p-2">
                  <Link href="/">
                    <p className="flex h-full items-center">SignOut</p>
                  </Link>
                </div>
              </div>
            </div>
          )} */}
        </Dropdown>
      </div>
    </nav>
  );
};

export default Page;
