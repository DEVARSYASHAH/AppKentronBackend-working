import React from "react";
import { BiUserCircle } from "react-icons/bi";

const HomeMain = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex h-16 border-b font-Helvetica text-xl border-b-gray-300 mx-7 items-center">
        <span className="flex font-bold">Welcome back,</span> Jennifer steve
      </div>
      <div className="flex flex-col my-3">
        <div className="flex mx-7 text-sm my-4 font-bold">
          Your organisaton at a glance
        </div>
        <div className="flex w-[97%] justify-around mx-3 2xl:mx-1 text-base">
          <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
            <div className="flex font-bold text-xs 2xl:text-sm mx-3">12000</div>
            <div className="flex items-center text-[#1616168A] text-xs 2xl:text-sm  mx-3">
              <BiUserCircle
                size={15}
                style={{ display: "flex", marginRight: "2px" }}
              />
              Users
            </div>
          </span>
          <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
            <div className="flex font-bold text-xs 2xl:text-sm  mx-3">
              12000
            </div>
            <div className="flex items-center text-[#1616168A] text-xs 2xl:text-sm  mx-3">
              <BiUserCircle
                size={15}
                style={{ display: "flex", marginRight: "2px" }}
              />
              Workspace
            </div>
          </span>
          <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
            <div className="flex font-bold mx-3 text-xs 2xl:text-sm ">
              12000
            </div>
            <div className="flex items-center text-[#1616168A] text-xs 2xl:text-sm  mx-3">
              <BiUserCircle
                size={15}
                style={{ display: "flex", marginRight: "2px" }}
              />
              Connection
            </div>
          </span>
          <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
            <div className="flex font-bold mx-3 text-xs 2xl:text-sm">12 GB</div>
            <div className="flex items-center text-[#1616168A] h-auto lg:h-[3vh] text-[10px] 2xl:text-sm 2xl:mx-3 mx-0">
              <BiUserCircle
                size={15}
                style={{ display: "flex", marginRight: "2px" }}
              />
              <span className="flex space-y-0 flex-wrap 2xl:mt-0 lg:mt-3">
                Total processes data
                <span className="flex text-[8px] text-[#1616164D] mx-1 items-end">
                  (All timee)
                </span>
              </span>
            </div>
          </span>
          <span className="flex flex-col bg-white h-16 w-[14vw] border justify-center rounded-lg">
            <div className="flex font-bold mx-3 text-xs 2xl:text-sm ">
              25 GB
            </div>
            <div className="flex items-center text-[#1616168A] text-xs 2xl:text-sm 2xl:mx-3 lg:mx-1">
              <BiUserCircle
                size={15}
                style={{ display: "flex", marginRight: "2px" }}
              />
              Total current storage
            </div>
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col h-[50vh]">
        <div className="flex text-sm h-12 items-center font-bold mx-6">
          Title here
        </div>
        <textarea className="flex bg-white rounded-lg flex-1 w-[96%] mx-6 p-2"></textarea>
      </div>
    </div>
  );
};

export default HomeMain;
