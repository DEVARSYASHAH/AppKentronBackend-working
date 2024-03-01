"use client";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { CiMemoPad } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import user from "../components/Assets/1.png";
import report from "../components/Assets/2.png";
import setting from "../components/Assets/3.png";
import support from "../components/Assets/4.png";
import down from "../components/Assets/downn.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SideBar = () => {
  const [showUser, setshowUser] = useState(false);
  const [showReport, setshowReport] = useState(false);
  const [showSetting, setshowSetting] = useState(false);

  const toggleUser = () => {
    setshowUser(!showUser);
  };

  const toggleReport = () => {
    setshowReport(!showReport);
  };

  const toggleSetting = () => {
    setshowSetting(!showSetting);
  };

  return (
    <div className="flex w-[110%] xl:w-full flex-col items-end bg-white h-screen">
      <div className="flex flex-col h-full w-full xl:w-[87%] text-base my-5">
        <span className="flex mx-4 xl:mx-0 xl:w-[11vw] hover:text-black my-2 hover:cursor-pointer hover:bg-[#E6E6E6] h-10 rounded-lg items-center">
          <span className="flex mx-4 font-bold">
            <AiOutlineHome size={20} />
          </span>
          <Link href="/adminhome">
            <span className="flex">Home</span>
          </Link>{" "}
        </span>
        <span
          className={`flex xl:w-[11vw] justify-between mx-4 xl:mx-0 hover:text-black my-2 hover:cursor-pointer hover:bg-[#E6E6E6] h-10 rounded-lg items-center ${
            showUser ? "bg-white" : ""
          }`}
          onClick={toggleUser}
        >
          <span className="flex flex-1">
            <span className="flex mx-4 font-bold h-6 w-6">
              <Image src={user} width={20} className="" alt="user" />
            </span>
            <span className="flex">Users</span>
          </span>
          <span className="flex mr-2">
            {showUser ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </span>
        {showUser && (
          <div className="flex flex-col">
            <Link href="/adminactive">
              <span className="flex justify-end mx-4 xl:mx-0 xl:w-[14vw] my-1 h-10 rounded-lg items-center">
                <div className="flex w-11/12 2xl:w-10/12 h-10 text-xs xl:text-sm pr-4  rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Active users
                </div>
              </span>
            </Link>
            <Link href="/adminguest">
              <span className="flex justify-end mx-4 xl:mx-0 xl:w-[14vw] my-1 h-10 rounded-lg items-center">
                <div className="flex w-11/12 2xl:w-10/12 h-10 text-xs xl:text-sm rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Guest users
                </div>
              </span>
            </Link>
            <Link href="/admindeactivate">
              <span className="flex justify-end mx-4 xl:mx-0 xl:w-[14vw] my-1 h-10 rounded-lg items-center">
                <div className="flex w-11/12 2xl:w-10/12 h-10 text-xs xl:text-sm rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Deactivated users
                </div>
              </span>
            </Link>
          </div>
        )}
        <span
          className={`flex xl:w-[11vw] mx-4 xl:mx-0 hover:text-black my-2 hover:cursor-pointer hover:bg-[#E6E6E6] h-10 rounded-lg items-center ${
            showUser ? "bg-white" : ""
          }`}
          onClick={toggleReport}
        >
          <span className="flex flex-1">
            <span className="flex mx-4 font-bold h-6 w-6">
              <Image src={report} width={20} className="" alt="user" />
            </span>
            <span className="flex">Reports</span>
          </span>
          <span className="flex mr-2">
            {showReport ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </span>

        {showReport && (
          <div className="flex flex-col">
            <Link href="/adminusage">
              <span className="flex justify-end mx-4 xl:mx-0 xl:w-[11vw] my-2 h-10 rounded-lg items-center">
                <div className="flex w-10/12 h-10 text-xs xl:text-sm  rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Usage
                </div>
              </span>
            </Link>
          </div>
        )}
        <span
          className={`flex xl:w-[11vw] mx-4 xl:mx-0 hover:text-black my-2 hover:cursor-pointer hover:bg-[#E6E6E6] h-10 rounded-lg items-center ${
            showUser ? "bg-white" : ""
          }`}
          onClick={toggleSetting}
        >
          <span className="flex flex-1">
          <span className="flex mx-4 font-bold h-6 w-6">
            <Image src={setting} width={20} className="" alt="setting" />
          </span>
          <span className="flex">Settings</span>
          </span>
          <span className="flex mr-2">
            {showSetting ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </span>
        {showSetting && (
          <div className="flex flex-col">
            <Link href="/admininfo">
              <span className="flex justify-center mx-4 xl:mx-0 xl:w-[14vw] my-2 h-10 rounded-lg items-center">
                <div className="flex w-10/12 h-10 text-xs xl:text-sm rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Organization Info
                </div>
              </span>
            </Link>
            <Link href="/adminpolicies">
              <span className="flex justify-center mx-4 xl:mx-0 xl:w-[14vw] my-2 h-10 rounded-lg items-center">
                <div className="flex w-10/12 h-10 text-xs xl:text-sm rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Organization policies
                </div>
              </span>
            </Link>
            <Link href="/adminsso">
              <span className="flex justify-center mx-4 xl:mx-0 xl:w-[14vw] my-2 h-10 rounded-lg items-center">
                <div className="flex w-10/12 h-10 text-xs xl:text-sm rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Setup SSO
                </div>
              </span>
            </Link>
            <Link href="/adminsources">
              <span className="flex justify-center mx-4 xl:mx-0 xl:w-[14vw] my-2 h-10 rounded-lg items-center">
                <div className="flex w-10/12 h-10 text-xs xl:text-sm rounded-md hover:text-black hover:bg-[#E6E6E6] justify-start px-4 items-center hover:cursor-pointer">
                  Manage sources
                </div>
              </span>
            </Link>
          </div>
        )}
        <span className="flex mx-4 xl:mx-0 xl:w-[11vw] text-sm xl:text-base hover:text-black my-2 hover:cursor-pointer hover:bg-[#E6E6E6] h-10 rounded-lg items-center">
          <span className="flex mx-4 h-6 w-6 font-bold">
            <Image src={support} width={20} className="" alt="support" />
          </span>
          <span className="flex">Support</span>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
