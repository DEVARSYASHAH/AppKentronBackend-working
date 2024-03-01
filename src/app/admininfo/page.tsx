"use client";

import Header from "../Admin/header";
import SideBar from "@/app/Admin/sidebar";

const OrganizationInfo = () => {
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] overflow-y-scroll h-[100vh] justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1">
        <div className="flex w-[20%] 2xl:w-[16%]">
          <SideBar />
        </div>
        <div className="flex flex-1 justify-start flex-col">
          <div className="flex w-full flex-col">
            <span className="flex h-[8vh] font-bold items-center mx-7 text-xl">
              Organization Information{" "}
            </span>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-6">
                <div className="flex text-sm 2xl:text-base font-bold w-[14vw] items-center h-16 border-r px-7 mx-5">
                  Detail
                </div>
                <div className="flex lg:w-[42vw] xl:w-[32vw]  items-center h-16 border-r px-7 mx-7 ">
                  <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 aspect-w-1 aspect-h-1 overflow-hidden -mr-1"></div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-sm font-bold">Slack Enterprise</p>
                    <p className="flex -mt-1 text-xs text-[#1616168A]">
                      example@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <span className="flex h-[8vh] font-bold items-center mx-7 text-lg">
              Billing information{" "}
            </span>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-t-lg border-b justify-start w-full items-center mx-7">
                <div className="flex font-bold text-sm 2xl:text-base w-[14vw] items-center h-16 border-r px-7 mx-5">
                  Company Info
                </div>
                <div className="flex lg:w-[42vw] xl:w-[32vw] items-center h-16 border-r px-7 mx-7 ">
                  <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-base font-bold">Company name</p>
                    <p className="flex -mt-1 text-[9px] text-[#1616168A]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-b-lg justify-start w-full items-center mx-7">
                <div className="flex font-bold w-[14vw] text-sm 2xl:text-base items-center h-16 border-r px-7 mx-5">
                  Username
                </div>
                <div className="flex lg:w-[42vw] xl:w-[32vw] items-center h-16 border-r px-7 mx-7 ">
                  <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-sm font-bold">Slack Enterprise</p>
                    <p className="flex -mt-1 text-xs text-[#1616168A]">
                      example@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfo;
