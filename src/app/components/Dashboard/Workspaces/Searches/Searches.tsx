import React, { useState } from "react";
import "./searches.css";
import check from "../../../Assets/check_circle.png";
import { GiBiceps } from "react-icons/gi";
import { RiFilter2Line } from "react-icons/ri";
import Image from "next/image";
import { PiStarBold } from "react-icons/pi";
import { BiDownload } from "react-icons/bi";
import { MdOutlineInfo } from "react-icons/md";
import work from "../../../Assets/workspaces.png";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import FilterPopup from "./filterpopup";
import ExportPopup from "./exportpopup";
import person from "../../../Assets/person.png";
import body from "../../../Assets/Group.png";

export const Searches = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isFilPopupVisible, setFilPopupVisible] = useState(false);

  const openFilPopup = () => {
    setFilPopupVisible(true);
  };

  const closeFilPopup = () => {
    setFilPopupVisible(false);
  };
  


  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="flex h-[76vh] overflow-y-scroll w-full flex-col">
      <div className="flex flex-col w-full">
        <div className="flex justify-start ml-1 py-4">
         <div className="flex lg:text-[12px] items-center h-6 w-[15vw]"> Showing<span className="flex mx-1 font-semibold">16,456</span> search
          results,</div>
        </div>
        <div className="flex w-[100%] my-1 2xl:my-0">
          <div className="flex 2xl:w-[15%]">
            <span className="flex bg-[#E7FFED] w-full px-2 shadow-lg justify-around h-9 items-center rounded-full">
              <div className="flex">
                <Image src={check} width={30} alt="none" className="h-6 w-6" />
              </div>
              <div className="flex px-2 text-[10px] 2xl:text-xs">Data collection completed</div>
              <div className="flex h-full items-center">
               <Image src={body} width={20
              } alt="biceps" />
              </div>
            </span>
          </div>
          <div className="flex flex-1 px-2">
            <span className="flex w-full px-2 shadow-lg justify-start mr-2 h-9 items-center rounded-full">
              <div className="flex text-[9.4px] 2xl:text-xs mx-4 h-full items-center font-medium 2xl:font-bold">
                Data collection contains :{" "}
              </div>
              <div className="flex 2xl:w-9/12 w-auto justify-around items-center h-full">
                {" "}
                <div className="flex h-full text-center items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">PII</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">Sensitive Words</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">HIPAA</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">Contracts</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">Address</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">US Social Security Number</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">Phone Number</div>
                </div>
                <div className="flex h-full items-center">
                  <div className="flex px-1">
                    <Image
                      src={check}
                      width={30}
                      alt="none"
                      className="mx-1 h-5 w-5"
                    />
                  </div>
                  <div className="flex text-[9.4px] 2xl:text-xs">Passport</div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex h-full justify-center items-center w-16">
            <span
              onClick={openFilPopup}
              className="flex cursor-pointer h-10 justify-center items-center w-full rounded-md bg-[#6528F7] text-white"
            >
              <RiFilter2Line size={18} />
            </span>
            {isFilPopupVisible && <FilterPopup onClose={closeFilPopup} />}
          </div>
          <div className="flex flex-1 mx-3 items-center">
            <input
              className="flex h-10 shadow-lg rounded-md px-5 w-full"
              type="search"
              placeholder="Filter here"
            />
          </div>
          <div className="flex w-54 justify-center">
            <button
              onClick={openPopup}
              className="flex rounded-md p-5 font-bold text-white justify-center items-center mx-4 px-12 my-3 bg-[#6528F7] h-10"
            >
              Export
            </button>
          </div>
          {isPopupVisible && <ExportPopup onClose={closePopup} />}
        </div>
      </div>
      <div className="flex h-[60vh] scrollmain">
        <div className="flex flex-1 flex-col justify-between overflow-y-scroll scrollsemi">
        <span className="flex flex-col lg:b border shadow-md rounded-md bg-[#FFFFFFBF] w-full 2xl:w-[96%] my-1 h-auto 2xl:h-[169px]">
            <div className="flex w-full px-4 h-auto 2xl:h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex 2xl:h-14 justify-center flex-col flex-1">
                <div className="flex w-full font-bold lg:text-sm 2xl:text-base mx-3 2xl:my-1 my-2 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01 
                </div>
                <div className="flex w-full h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1 text-center" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-1 xl:px-2 justify-start h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <Image src={person} width={20} alt='person' className="ml-2  mx-2 text-base" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex 2xl:flex-1 justify-end 2xl:px-2 items-center">
                <BiDownload className="mx-2" size={22} />
                <PiStarBold classname="mx-2" size={20} />
                <MdOutlineInfo className="ml-2" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
          <span className="flex flex-col lg:b border shadow-md rounded-md bg-[#FFFFFFBF] w-full 2xl:w-[96%] my-1 h-auto 2xl:h-[169px]">
            <div className="flex w-full px-4 h-auto 2xl:h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex 2xl:h-14 justify-center flex-col flex-1">
                <div className="flex w-full font-bold lg:text-sm 2xl:text-base mx-3 2xl:my-1 my-2 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01 
                </div>
                <div className="flex w-full h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1 text-center" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-1 xl:px-2 justify-start h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <Image src={person} width={20} alt='person' className="ml-2  mx-2 text-base" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex 2xl:flex-1 justify-end 2xl:px-2 items-center">
              <BiDownload className="mx-2" size={22} />
                <PiStarBold classname="mx-2" size={20} />
                <MdOutlineInfo className="ml-2" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
          <span className="flex flex-col lg:b border shadow-md rounded-md bg-[#FFFFFFBF] w-full 2xl:w-[96%] my-1 h-auto 2xl:h-[169px]">
            <div className="flex w-full px-4 h-auto 2xl:h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex 2xl:h-14 justify-center flex-col flex-1">
                <div className="flex w-full font-bold lg:text-sm 2xl:text-base mx-3 2xl:my-1 my-2 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01 
                </div>
                <div className="flex w-full h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1 text-center" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-1 xl:px-2 justify-start h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <Image src={person} width={20} alt='person' className="ml-2  mx-2 text-base" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex 2xl:flex-1 justify-end 2xl:px-2 items-center">
              <BiDownload className="mx-2" size={22} />
                <PiStarBold classname="mx-2" size={20} />
                <MdOutlineInfo className="ml-2" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
          <span className="flex flex-col lg:b border shadow-md rounded-md bg-[#FFFFFFBF] w-full 2xl:w-[96%] my-1 h-auto 2xl:h-[169px]">
            <div className="flex w-full px-4 h-auto 2xl:h-24 items-center">
              <span className="flex w-12 h-12 rounded-full items-center justify-center border mx-2 shadow-lg">
                <Image src={work} width={30} alt="none" className="h-6 w-6" />
              </span>
              <span className="flex 2xl:h-14 justify-center flex-col flex-1">
                <div className="flex w-full font-bold lg:text-sm 2xl:text-base mx-3 2xl:my-1 my-2 underline underline-offset-1">
                  Personal messages john and jennifer - 2023-10-01 
                </div>
                <div className="flex w-full h-full items-center justify-around">
                  <div className="flex px-3 h-full items-center text-sm">
                    {" "}
                    <FaRegCalendarDays className="flex h-full mr-1 text-center" /> Created
                    date :
                  </div>
                  <div className="flex justify-around h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    12/05/2023{" "}
                  </div>
                  <div className="flex flex-1 px-1 xl:px-2 justify-start h-full items-center text-[#363636] text-sm font-bold">
                    {" "}
                    |
                    <Image src={person} width={20} alt='person' className="ml-2  mx-2 text-base" />
                    Direct Message
                  </div>
                </div>
              </span>
              <span className="flex 2xl:flex-1 justify-end 2xl:px-2 items-center">
              <BiDownload className="mx-2" size={22} />
                <PiStarBold classname="mx-2" size={20} />
                <MdOutlineInfo className="ml-2" size={20} />
              </span>
            </div>
            <span className="flex w-full text-xs mx-2 font-normal p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </span>
          </span>
        </div>
        <div className="flex flex-col w-80 border shadow-lg overflow-y-scroll mb-2 mx-4 rounded-md bg-[#FFFFFFBF] h-full">
          <div className="flex w-full justify-between items-center h-10 border-b">
            <span className="flex h-10 mx-4 font-bold text-sm items-center">
              <MdOutlineInfo className="mx-1" size={20} />
              File information
            </span>
            <RiCloseLine size={20} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  size
                </div>
                <div className="flex font-normal text-base">58.23 KB</div>
              </span>
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Last modified
                </div>
                <div className="flex font-normal text-base">10/25/2023</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Type
                </div>
                <div className="flex font-normal text-base">Conversational</div>
              </span>
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  File creation
                </div>
                <div className="flex font-normal text-base">10/25/2023</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Title
                </div>
                <div className="flex font-normal text-base">
                  Personal messages john and Jennifer - 2023-10-01
                </div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Active Participant
                </div>
                <div className="flex font-normal text-base">Jennifer stark</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Active Participant
                </div>
                <div className="flex font-normal text-base">Jennifer stark</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Member
                </div>
                <div className="flex font-normal text-base">
                  Jennifer stark, Jennifer stark
                </div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Thread
                </div>
                <div className="flex font-normal text-base">Direct message</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Modifications
                </div>
                <div className="flex font-normal text-base">Yes</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Language
                </div>
                <div className="flex font-normal text-base">English</div>
              </span>
            </div>
            <div className="flex">
              <span className="flex flex-1 px-6 py-3 flex-col">
                <div className="flex font-normal text-sm text-[#1616168A]">
                  Duplicates
                </div>
                <div className="flex font-normal text-base">02</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
