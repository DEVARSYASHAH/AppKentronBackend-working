"use client";
import Header from "../Admin/header";
import { BsPersonFillAdd } from "react-icons/bs";
import SideBar from "../Admin/sidebar";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Pagination } from "@nextui-org/react";

const ActiveGuest = () => {
  const data = new Array(50).fill(null).map((_, index) => ({
    name: `User Name ${index + 1}`,
    email: `username${index + 1}@example.com`,
    signin: "12/02/2023 11:00 AM",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [selectAll, setSelectAll] = useState(false); // Added state for "Select All" checkbox
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

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
  const [selectedItems, setSelectedItems] = useState(
    Array(data.length).fill(false)
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of users
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };
  const handleSelectItemChange = (index: number) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
  };

  const isAllChecked = currentItems.every((user) => selectAll);

  return (
    <div className="flex text-black flex-col bg-[#ede4ff] overflow-y-scroll h-screen justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1 overflow-y-scroll">
        <div className="flex w-[20%] 2xl:w-[16%]  overflow-y-scroll">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex h-20 w-full justify-between items-center mx-5">
            <div className="flex text-xl font-bold">Guest Users</div>
          </div>
          <div className="flex w-full h-[80vh]">
            <div className="w-full mx-5">
              <div className="flex flex-col w-full">
                <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
                  <div className="inline-block w-full align-middle">
                    <div className="overflow-hidden w-full">
                      <div className="bg-white shadow-md h-full rounded my-6">
                        <table className="min-w-max bg-white w-full h-full table-auto">
                          <thead>
                            <tr className="border-b border-gray-200 py-4 text-sm font-bold leading-normal">
                              <th className="py-3 px-6 text-left">
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
                                Sign-in status
                              </th>
                              <th className="py-3 px-5 justify-start">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-600 text-sm font-light">
                            {currentItems.map((user, index) => (
                              <tr className="" key={index}>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="font-bold">
                                      <input
                                        id={`checkbox-${index}`}
                                        type="checkbox"
                                        checked={
                                          selectAll ||
                                          selectedRows.includes(index)
                                        }
                                        onChange={() => toggleCheckbox(index)}
                                        className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                                      />
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
                                  <span className="flex justify-between text-[#161616] font-medium py-2 px-3 rounded-full text-xs">
                                    {user.signin}
                                    {/* <RiArrowDropDownLine size={20} /> */}
                                  </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                  <div className="flex h-full items-center item-center justify-center mr-8">
                                    <IoCloseCircleSharp className="flex mt-1 mx-1" />
                                    <div className="w-4 transform hover:scale-110">
                                      {/* Icon or button for action */}
                                      <button className="text-[#161616] h-full items-center font-medium text-xs">
                                        Deactivate
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex justify-between -mt-6 bg-white lg:border py-2 2xl:border-none lg:mb-2 2xl:mb-1 items-center px-2  rounded-md ">
                        <div className="flex">
                          <span className="text-sm text-gray-700">
                            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                            {currentPage * itemsPerPage} of {data.length}{" "}
                            entries
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveGuest;
