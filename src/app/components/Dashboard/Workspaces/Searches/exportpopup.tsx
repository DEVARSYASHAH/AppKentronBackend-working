"use client";
import { GrFormClose } from "react-icons/gr";
import { RiFilter2Line } from "react-icons/ri";
import "./searches.css";

interface ExportProps {
  onClose: () => void;
}

const ExportPopup: React.FC<ExportProps> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[65%] bg-white xl:w-[63%] 2xl:w-[50%] h-[87vh] overflow-y-scroll 2xl:h-[84vh] rounded-lg p-2 shadow-md z-50">
      <div className="flex w-full flex-col h-full">
        <div className="flex w-full border-b py-2 items-center justify-between my-1 2xl:my-4">
          <span className="flex h-full items-center font-bold text-sm 2xl:text-sm">
            <span className="flex mx-1 cursor-pointer h-10 justify-center items-center rounded-full w-10 bg-white text-black">
              <RiFilter2Line className="mx-1" size={18} />
            </span>
            Export Collection
          </span>
          <span onClick={onClose} className="flex cursor-pointer">
            <GrFormClose size={25} />
          </span>
        </div>
        <div className="flex text-black border-b flex-col w-full">
          <div className="flex text-base mx-4 mt-2 font-semibold">
            Define your export
          </div>
          <div className="flex font-normal text-xs mx-5 my-2">
            Export file name
          </div>
          <div className="flex font-normal justify-start mx-4 text-xs items-start h-16">
            <input
              id="dropdownDefaultButton"
              placeholder="Enter file name"
              data-dropdown-toggle="dropdown"
              className="w-full font-medium rounded-lg text-sm px-4 text-black py-2.5 border"
              type="text"
            />
          </div>
          <div className="flex font-normal text-xs mx-5 mb-2">Export type</div>
          <div className="flex font-normal justify-start mx-4 xl:text-xs items-start h-16">
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 mx-1 text-blue-600 bg-[#6528F7] border-[#6528F7] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              <label htmlFor="default-radio-1" className="ms-2 text-[10px] xl:text-xs">
                Generate CSV report with metadata
              </label>
            </div>
            <div className="flex items-center mx-8 mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 mx-1 text-blue-600 bg-[#6528F7] border-[#6528F7] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
              />
              <label htmlFor="default-radio-1" className="ms-2 text-[10px] xl:text-xs">
                Generate CSV report and download file
              </label>
            </div>
          </div>
          <div className="flex -mt-5 text-sm font-bold mx-5">
            Metadata Export
          </div>
          <div className="flex font-normal justify-between text-xs h-48">
            <div className="flex flex-1 border-r flex-col h-full">
              <span className="flex h-10 items-center mx-5 text-[#1616168A]">
                Document metadata
              </span>
              <span className="flex flex-1 justify-around mx-4 flex-col">
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Application name
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  File name
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  File last modified
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  File title
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  File size
                </span>
              </span>
            </div>
            <div className="flex flex-1 border-r flex-col h-full">
              <span className="flex h-10 items-center mx-5 text-[#1616168A]">
                Source metadata
              </span>
              <span className="flex flex-1 justify-around mx-4 flex-col">
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Last modified in source
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  List of creation in source
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  List of modifier in source
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Deleted in origin
                </span>
                <span className="flex w-full">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  URL to original file
                </span>
              </span>
            </div>
            <div className="flex flex-1 h-full flex-col">
              <span className="flex h-10 items-center mx-5 text-[#1616168A]">
                Source specific metadata
              </span>
              <span className="flex flex-1 mx-4 flex-col">
                <span className="flex my-2 w-full items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Conversation slack <span className="flex text-[#1616168A] mx-1 text-[8px]">(ID, Name, Type)</span>
                </span>
                <span className="flex w-full my-2 items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Slack Enterprise <span className="flex text-[#1616168A] mx-1 text-[8px]">(Workspace ID, Name)</span>
                </span>
                <span className="flex w-full items-center my-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Gmail <span className="flex text-[#1616168A] mx-1 text-[8px]">(Date receive, sent, Email ID, 
Email from, To)
</span>
                </span>
              </span>
            </div>
          </div>
          <span className="flex mx-5 my-2">Comments</span>
          <textarea
            placeholder="Enter comments here"
            className="flex rounded-md p-3 mx-4 items-start h-24 my-2 border"
          />
        </div>
        <div className="flex w-full h-full my-2 items-center justify-end">
          <button className="flex mx-2 bg-[#6528F7] text-white hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-medium w-20 h-10 text-sm rounded-lg hover:text-white">
            Export
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

export default ExportPopup;
