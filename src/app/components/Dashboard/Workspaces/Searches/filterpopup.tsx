"use client";
import { GrFormClose } from "react-icons/gr";
import { RiFilter2Line } from "react-icons/ri";

interface FilterProps {
  onClose: () => void;
}

const FilterPopup: React.FC<FilterProps> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white lg:w-[50%] 2xl:w-[45%] 2xl:h-[72vh] rounded-lg p-2 shadow-md z-50">
      <div className="flex w-full flex-col h-full">
        <div className="flex w-full border-b py-2 items-center justify-between my-1 2xl:my-4">
          <span className="flex h-full items-center font-bold text-sm 2xl:text-sm">
            <span className="flex shadow-md mx-2 cursor-pointer h-10 justify-center items-center rounded-full w-10 bg-white text-black">
              <RiFilter2Line className="mx-1" size={18} />
            </span>
            Filter Data Collection
          </span>
          <span onClick={onClose} className="flex cursor-pointer">
            <GrFormClose size={25} />
          </span>
        </div>
        <div className="flex text-black border-b flex-col w-full">
          <div className="flex font-normal text-sm mx-4 my-2">Source Type</div>
          <div className="flex font-normal  lg:text-[10px] 2xl:text-xs  border-b items-center h-12">
            <span className="flex items-center px-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Slack Enterprise
            </span>
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Slack Connector
            </span>
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Google Workspace
            </span>
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Google Workspace Enterprise
            </span>
          </div>
          <div className="flex font-normal text-sm mx-4 my-3">File Type</div>
          <div className="flex font-normal border-b lg:text-[10px] 2xl:text-xs  w-full items-center h-24 lg:flex-wrap">
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Conversation
            </span>
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Image
            </span>
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Email
            </span>
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Document
            </span>
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              System
            </span>
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Canvas
            </span>
            <span className="flex px-4 lg:w-32 xl:w-auto">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Other
            </span>
          </div>
          <div className="flex font-normal text-sm mx-4 my-4">
            Creation Date
          </div>
          <div className="flex font-normal justify-start mx-4 lg:text-[10px] 2xl:text-xs  items-start h-16">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="w-11/12 justify-between font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center border "
              type="button"
            >
              All Time{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>{" "}
          </div>
          <div className="flex font-normal text-sm mx-4 my-4">
            Participation Name
          </div>
          <div className="flex font-normal justify-start mx-4 text-xs items-start h-16">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="w-11/12 justify-between font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center border "
              type="button"
            >
              Select Name{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>{" "}
          </div>
          <div className="flex font-normal text-sm mx-4">Slack components</div>
          <div className="flex font-normal lg:text-[10px] 2xl:text-xs items-center h-12">
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Group Message
            </span>
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Direct Message
            </span>
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Canvas Message
            </span>
            <span className="flex px-2 items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              Canvas Message
            </span>
          </div>
        </div>
        <div className="flex w-full h-full my-2 items-center justify-end">
          <button className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-medium w-20 h-10 text-sm rounded-lg hover:text-white">
            Submit
          </button>
          <button
            onClick={onClose}
            className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-medium text-sm w-20 h-10 rounded-lg hover:text-white"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
