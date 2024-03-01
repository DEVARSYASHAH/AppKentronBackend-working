"use client"
import Header from "../Admin/header";
import SideBar from "@/app/Admin/sidebar";
import Toggle from "../Admin/switch/toggle";

const OrganizationPolicies = () => {
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-[100vh] overflow-y-scroll justify-between w-full">
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
              Organization Policies{" "}
            </span>
            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
                <div className="flex flex-1">
                <div className="flex font-bold text-base w-[14vw] items-center h-16 border-r px-7 mx-5">
                  Guest Access
                </div>
                <div className="flex xl:w-[22vw] items-center h-16 border-r px-7 mx-7 ">
                  <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-sm font-bold">
                      Slack Enterprise
                    </p>
                    <p className="flex -mt-1 text-xs text-[#1616168A]">
                      example@example.com
                    </p>
                  </div>
                </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                  <Toggle label="slack"/>
                  </div>
                </div>
              </div>
            </div>
             <div className="flex justify-center my-6 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
                <div className="flex flex-1">
                <div className="flex font-bold w-[14vw] text-base items-center h-16 border-r px-7 mx-5">
                  Workspace Deletion
                </div>
                <div className="flex xl:w-[22vw] items-center h-16 border-r px-7 mx-7 ">
                  <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                  <div className="flex flex-col mx-3">
                    <p className="flex text-sm font-bold">
                      Slack Enterprise
                    </p>
                    <p className="flex -mt-1 text-xs text-[#1616168A]">
                      example@example.com
                    </p>
                  </div>
                </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-24 items-center justify-between h-8 rounded-2xl border">
                  <Toggle label="slack."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
  
  export default OrganizationPolicies