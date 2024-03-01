"use client";
import Header from "../Admin/header";
import SideBar from "@/app/Admin/sidebar";
import SsoPopup from '@/app/Admin/popups/sso';
import {useState} from "react";
import Toggle from "../Admin/switch/toggle";



const SetupSso = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className={`flex text-black flex-col bg-[#ede4ff] h-screen overflow-y-scroll justify-between`}>
      <span className={`flex h-20 bg-black text-white ${isPopupVisible ? 'filter blur-sm' : ''}`}>
        <Header />
      </span>
      <div className="flex w-full flex-1">
        <div className="flex w-[20%] 2xl:w-[16%]">
          <SideBar />
        </div>
        <div className="flex flex-1 justify-start flex-col">
          <div className="flex w-full flex-col">
            <span className="flex h-[8vh] justify-between font-bold items-center mx-7 my-3 text-xl">
              SSO Setting{" "}
              <button onClick={openPopup} className="flex bg-[#6528F7] text-white font-bold text-sm justify-center items-center w-[8vw] h-10 rounded-lg">Add SSO</button>
            </span>
                  {isPopupVisible && <SsoPopup onClose={closePopup} />}

            <div className="flex justify-center h-24">
              <div className="flex bg-white rounded-lg justify-start w-full items-center mx-7">
                <div className="flex flex-1">
                  <div className="flex font-bold w-[14vw] text-base items-center h-16 border-r px-7 mx-5">
                    Guest Access
                  </div>
                  <div className="flex items-center h-16 border-r px-7 mx-7 ">
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
                  <div className="flex w-28 items-center justify-between h-10 rounded-2xl">
                  <Toggle label="sso" />
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

export default SetupSso;
