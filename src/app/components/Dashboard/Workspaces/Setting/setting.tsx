import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import React, { useState } from "react";
import "./setting.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Toggle from "../../../../Admin/switch/toggle";
import { IoMdShare } from "react-icons/io";
import SharePopup from "../Searches/share";
import { Pagination } from "@nextui-org/react";

export const Setting = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const toggleCheckbox = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  // New data source
  const data = new Array(50).fill(null).map((_, index) => ({
    name: `Steve Parker ${index + 1}`,
    email: `username${index + 1}@example.com`,
    role: "Manage",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of users
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="flex h-[76vh] w-full flex-col">
      <div className="flex h-[16vh]  py-8 justify-around border shadow-md bg-white mx-2 rounded-md text-sm font-bold mt-5 flex-col">
        <div className="flex flex-1  items-center text-sm border-b mx-6">
          <div className="flex flex-1 h-full justify-start">
            <span className="flex font-bold mx-5">External Sharing</span>
            <span className="flex mx-12 font-normal">
              Share with people outside of the organization
            </span>
          </div>
          <div className="flex justify-end items-end">
            <Toggle label="Enable" />
          </div>
        </div>
        <div className="flex flex-1 items-center text-sm py-2 pt-2 2xl:pt-5 mx-6">
          <div className="flex flex-1 h-full justify-start">
            <span className="flex font-bold mx-5">Share Workspace</span>
            <span className="flex mx-12 font-normal">
              Share workspace with users or group
            </span>
          </div>
          <div
            onClick={openPopup}
            className="flex cursor-pointer justify-start w-24 items-start"
          >
            <IoMdShare className="mx-2" size={20} />
            Share
          </div>
          {isPopupVisible && <SharePopup onClose={closePopup} />}
        </div>
      </div>
      <div className="flex h-12 ml-2 text-sm font-bold items-center -mb-3 mt-5">
        Users & Permissions
      </div>
      <div className="flex flex-1 flex-col overflow-y-scroll ">
        <div className="flex flex-col w-full">
          {/* <div>table</div> */}
          <div className="bg-white h-[90%]  my-6 rounded-md">
            <table className="min-w-max bg-white w-full h-full table-auto rounded-md ">
              <thead>
                <tr className="border-b py-4 text-sm font-bold leading-normal">
                  <th className="py-3 px-6 flex h-12 items-center text-left">
                    <input
                      id="name-checkbox"
                      type="checkbox"
                      checked={selectAll}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                    />
                    Name
                  </th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 flex mx-3 text-center">
                    Permission
                  </th>
                  <th className="py-3 px-5 justify-start">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {currentItems.map((user, index) => (
                  <tr className="" key={index}>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-bold flex h-12 items-center">
                          <input
                            id={`checkbox-${index}`}
                            type="checkbox"
                            checked={selectAll || selectedRows.includes(index)}
                            onChange={() => toggleCheckbox(index)}
                            className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                          />{" "}
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex text-[#161616] font-medium text-xs items-center">
                        <span>{user.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="flex text-[#161616] font-medium py-2 px-3 rounded-full text-xs">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center mr-8">
                        <div className="w-4 transform hover:scale-110">
                          {/* Icon or button for action */}
                          <button className="h-full items-center text-red-500 flex font-medium text-xs">
                            <MdOutlineDeleteOutline size={20} />
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex -mt-3 justify-between  bg-white  py-2 2xl:border-none lg:mb-3 2xl:mb-1 items-center px-2  rounded-md ">
            <div className="flex">
              <span className="text-sm text-gray-700">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {currentPage * itemsPerPage} of {data.length} entries
              </span>
            </div>
            <div className="flex">
              <Pagination
                showControls
                total={pageCount}
                initialPage={currentPage}
                onChange={(newPage) => paginate(newPage)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
