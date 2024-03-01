"use client";
import React, { useEffect, useState } from "react";
import { BsQuestionCircle, BsFillChatLeftTextFill } from "react-icons/bs";
import user from "../components/Assets/user.png";
import Image from "next/image";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div className="flex h-20 w-full justify-between items-center">
      <div className="flex mx-10 flex-1">
        <div className="flex bg-[#6528F7] rounded-md text-lg h-10 w-10 font-bold justify-center items-center">
          K
        </div>
        <div className="flex flex-col mx-3">
          <p className="flex font-bold">Kentron</p>
          <p className="flex -mt-0 text-sm">Admin Center</p>
        </div>
      </div>
      <div className="flex flex-1 justify-end h-full mx-5 items-center ">
        <span className="flex mx-5">
          <BsQuestionCircle size={25} />
        </span>
        <span className="flex mr-5">
          <BsFillChatLeftTextFill size={23} />
        </span>
        <span className="flex">
          <Dropdown className="flex bg-white rounded-md justify-center items-center mx-5 w-8">
          <DropdownTrigger>
            <Image src={user} width={30} alt="none" className="adds" />
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
          </Dropdown>
        </span>
      </div>
    </div>
  );
};

export default Header;
