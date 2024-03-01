"use client"
import Toggle from "../Admin/switch/toggle";
import Header from "../Admin/header";
import SideBar from "@/app/Admin/sidebar";

const ManageSources = () => {
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-screen overflow-y-scroll justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1 overflow-y-scroll">
        <div className="flex w-[20%] 2xl:w-[16%] overflow-y-scroll">
          <SideBar />
        </div>
        <div className="flex flex-1 justify-start flex-col">
          <div className="flex w-full flex-col h-screen overflow-y-scroll">
            <span className="flex h-[8vh] font-bold items-center mx-7 text-xl">
              Manage Sources{" "}
            </span>
            <div className="flex justify-center mb-3 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex items-center h-16 border-r xl:w-[18vw] px-7 mx-7 lg:w-[22vw] ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Slack Enterprise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                <div className="flex w-28 items-center justify-center h-10 rounded-2xl">
                  <Toggle label="slack"/>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
                <div className="flex flex-1">
                  <div className="flex items-center h-16 border-r px-7 xl:w-[18vw] lg:w-[22vw] mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Google Workspace
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                  <div className="flex w-28 items-center justify-center h-10 rounded-2xl">
                  <Toggle label="google"/>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex xl:w-[18vw] items-center lg:w-[22vw] h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Jira
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                <div className="flex w-28 items-center justify-center h-10 rounded-2xl">
                  <Toggle label="jira"/>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex lg:w-[22vw] xl:w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Confluence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                <div className="flex w-28 items-center justify-center h-10 rounded-2xl">
                  <Toggle label="confluence"/>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3 h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
              <div className="flex flex-1">
                  <div className="flex lg:w-[22vw] xl:w-[18vw] items-center h-16 border-r px-7 mx-7 ">
                    <div className="flex bg-[#D9D9D9] rounded-full h-10 w-10 -mr-1"></div>
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-bold">
                        Microsoft 365
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex mx-10">
                <div className="flex w-28 items-center justify-center h-10 rounded-2xl">
                  <Toggle label="microsoft"/>

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

export default ManageSources;
