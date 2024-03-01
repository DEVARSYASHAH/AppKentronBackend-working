"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { Pagination } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../AllWorkspaces/workspace.css";
import { FaRegEdit } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import wk from "../Assets/workspaces.png";
import add from "../Assets/add.png";
import copy from "../Assets/file_copy.png";
import share from "../Assets/share.png";
import ungroup from "../Assets/ungroup.png";
import settings from "../Assets/settings_account_box.png";
import close from "../Assets/close.png";
import Image from "next/image";
import Link from "next/link";
import bodylogo from "../../../Assets/bogylogo.png";
import edit from "../../../Assets/Edit.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const AllWorkspace = () => {
  const [data, setData] = useState(
    new Array(20).fill(null).map((_, index) => ({
      name: `Workspace Name${index + 1}`,
      size: 0.6,
      external: "yes",
      status: "Active",
      date: "14/08/2022",
      lastDate: "12/05/2023",
      lastby: "John Deer",
      isChecked: false, // New property for individual checkboxes
    }))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false); // Added state for "Select All" checkbox
  const itemsPerPage = 5; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const [createbox, setcreatebox] = useState(false);
  const createboxshow = () => {
    setcreatebox(true);
  };
  const createboxclose = () => {
    setcreatebox(false);
  };
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of userss
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const isAllChecked = currentItems.every((user) => selectAll);

  const handleDropdownClick = (index: number, event: React.MouseEvent) => {
    // Check if the clicked element is the BiDotsVerticalRounded icon
    const isDotsIconClicked = event.target instanceof SVGElement && event.target.contains(event.target.ownerSVGElement);
  
    // Open or close the dropdown based on the condition
    setOpenDropdownIndex(isDotsIconClicked ? index : (openDropdownIndex === index ? null : index));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector(".pop");

    if (dropdown && !dropdown.contains(target)) {
      setOpenDropdownIndex(null);
    }
    
  };

  useEffect(() => {
    // Attach event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = (index: number) => {
    // Create a copy of the data array
    const newData = [...data];
    // Remove the selected row based on the index
    newData.splice(indexOfFirstItem + index, 1);
    // Update the state with the new data
    setData(newData);
    setOpenDropdownIndex(null);
  };

  const [editbox, seteditbox] = useState(false);
  const [workspacename, setworkspacename] = useState("Workspace Name");
  const [status, setstatus] = useState("Active");
  const [description, setdescription] = useState(
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages`
  );
  const workspace = useRef(null);
  const stats = useRef(null);
  const desc = useRef(null);
  const editboxopen = () => {
    seteditbox(true);
  };
  const editboxclose = () => {
    seteditbox(false);
  };
  const save = (a: any, b: any, c: any) => {
    setworkspacename(a.current.value);
    setdescription(c.current.value);
    setstatus(b.current.value);
    a.current.value = "";
    b.current.value = "";
    c.current.value = "";
    seteditbox(false);
  };

  return (
    <div className="flex h-[86vh] 2xl:w-full flex-col">
      <div className="flex py-6 text-2xl mx-3 font-semibold text-black">
        All Workspaces{" "}
      </div>
      <div className="2xl:h-[500px] bg-white lg:h-[500px] overflow-y-auto flex px-3 rounded-md flex-col 2xl:w-full mx-3" >
        <div className="flex 2xl:w-full justify-end mt-2 -mb-3 px-3 items-center text-black">
          <input
            className="flex h-10 shadow-md border rounded-md px-5"
            type="search"
            placeholder="Search here..."
          />
        </div>
        {/* <div>table</div> */}
        <div className="sh-full lg:my-8 2xl:my-6 rounded-md">
          <table className="min-w-max w-full h-full table-auto rounded-md ">
            <thead>
              <tr className="border-b lg:text-[10px] xl:text-[13px] 2xl:text-base  border-gray-200 py-4 text-sm text-black font-bold leading-normal">
                <th className="py-3 xl:px-6 flex items-center text-left">
                  <input
                    id={`selectAllCheckbox`}
                    type="checkbox"
                    value=""
                    checked={isAllChecked}
                    onChange={() => {
                      const newData = [...data];
                      newData.forEach(
                        (item) => (item.isChecked = !isAllChecked)
                      );
                      setData(newData);
                      setSelectAll(!isAllChecked);
                    }}
                    className="w-4 h-4 mx-6 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                  />
                  Name
                </th>
                <th className="py-3 xl:px-6 text-left">Size (GB)</th>
                <th className="py-3 xl:px-6 flex mx-3 text-center">
                  Externally Shared
                </th>
                <th className="py-3 px-8 justify-start pl-0">Status</th>
                <th className="py-3 xl:px-5 justify-start">Created Date</th>
                <th className="py-3 xl:px-5 justify-start">Last Modify Date</th>
                <th className="py-3 xl:px-5 justify-start">Last Modify By</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light lg:text-[10px] xl:text-sm 2xl:text-sm  text-black">
              {/* Step 3: Render tbody content conditionally */}

              {currentItems.map((user, index) => (
                <tr className="" key={index}>
                  <td className="xl:px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-semibold text-sm lg:w-auto justify-between flex items-center">
                        <input
                          id={`checkbox-${index}`}
                          type="checkbox"
                          value=""
                          checked={user.isChecked}
                          onChange={() => {
                            const newData = [...data];
                            newData[indexOfFirstItem + index].isChecked =
                              !newData[indexOfFirstItem + index].isChecked;
                            setData(newData);
                          }}
                          className="w-4 h-4 mx-6 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                        />

                        <Image
                          src={wk}
                          width={15}
                          alt="wk"
                          className="mr-[5px]"
                        />
                        {user.name}
                        <BiDotsVerticalRounded
                          className="mx-2 cursor-pointer"
                          onClick={(event: React.MouseEvent<SVGElement, MouseEvent>) => handleDropdownClick(index, event)}
                        />
                        {/* Render the dropdown conditionally based on the openDropdownIndex */}
                        {openDropdownIndex === index && (
                          <div className="absolute pop pap lg:text-xs xl:text-sm rounded-md border w-[13vw] lg:w-[10vw] h-28 -mb-20">
                            {/* Dropdown content here */}
                            <div className="flex w-full flex-col h-full rounded-md justify-around px-4 bg-white text-black shadow-md">
                              <p
                                onClick={() => {
                                  editboxopen();
                                }}
                                className="flex flex-1 items-center cursor-pointer"
                              >
                                {" "}
                                <FaRegEdit className="mx-1" />
                                Edit
                              </p>
                              <p
                                onClick={() => {
                                  createboxshow();
                                }}
                                className="flex flex-1 items-center cursor-pointer"
                              >
                                <LuInfo className="mx-1" />
                                View detail
                              </p>
                              <p
                                onClick={() => handleDelete(index)}
                                className="flex flex-1 items-center cursor-pointer"
                              >
                                <RiDeleteBin6Line className="mx-1" />
                                Delete
                              </p>
                            </div>
                          </div>
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="lg:py-2 xl:px-6 text-left">
                    <div className="flex text-[#161616] font-medium mx-1 text-sm h-full justify-start items-center">
                      <span>{user.size}</span>
                    </div>
                  </td>
                  <td className="lg:py-2 xl:px-6 text-center">
                    <span className="flex text-[#161616] w-10/12  h-full items-center text-left font-medium py-1 px-3 rounded-full text-xs">
                      {user.external}
                    </span>
                  </td>

                  <td className="lg:py-2 xl:px-6 text-center">
                    <div className="flex item-center justify-center mr-8">
                      {user.status}
                    </div>
                  </td>
                  <td className="lg:py-2 xl:px-6 text-center">
                    <span className="flex text-[#161616] justify-center font-medium py-2 px-1 rounded-full text-xs">
                      {user.date}
                    </span>
                  </td>
                  <td className="lg:py-2 xl:px-6 text-center">
                    <span className="flex text-[#161616] w-10/12 justify-center  h-full items-center text-left font-medium py-1 px-3 rounded-full text-xs">
                      {user.lastDate}
                    </span>
                  </td>
                  <td className="lg:py-2 xl:px-6 text-center">
                    <span className="flex text-[#161616] justify-center w-10/12  h-full items-center text-left font-medium py-1 px-3 rounded-full text-xs">
                      {user.lastby}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between -mt-6 bg-white lg:border py-1 2xl:border-none lg:mb-2 2xl:mb-1 items-center px-2  rounded-md ">
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
        <div className={createbox ? "workspcreation" : "createworkspacehid"}>
          <div className="crebox">
            <div className="createhead">
              <h1>Create Workspace</h1>
              <Image
                src={close}
                width={20}
                alt="none"
                className="icon"
                onClick={() => {
                  createboxclose();
                }}
              />
            </div>

            <div className="createboxinputs">
              <p>
                Name <span>| Required</span>
              </p>
              <input type="text" placeholder="Enter workspace name" />
            </div>

            <div className="createboxinputs">
              <p>Description</p>
              <textarea rows={7} placeholder="Enter description" />
            </div>

            <div className="createboxbtn">
              <button
                onClick={() => {
                  // switchToSingleWorkspace();
                  createboxclose(); // Close the modal after switching
                }}
                className="savebtn"
              >
                Save
              </button>
              <button
                onClick={() => {
                  createboxclose();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={editbox ? "workspaceedit" : "createworkspacehid"}>
        <div className="editbox">
          <div className="createhead">
            <h1>Edit Workspace</h1>
            <Image
              src={close}
              width={100}
              alt="none"
              className="icon"
              onClick={() => {
                editboxclose();
              }}
            />
          </div>

          <div className="createboxinputs">
            <p>
              Name <span>| Required</span>
            </p>
            <input
              type="text"
              placeholder="Enter workspace name"
              ref={workspace}
            />
          </div>

          <div className="createboxinputs">
            <p>Description</p>
            <textarea rows={4} placeholder="Enter description" ref={desc} />
          </div>

          <div className="createboxinputs">
            <p>
              Status <span>| Required</span>
            </p>
            <select name="status" id="status" ref={stats}>
              <option value="active">Active</option>
              <option value="noactive">Not active</option>
            </select>
          </div>

          <div className="createboxbtn">
            <button
              className="savebtn"
              onClick={() => {
                save(workspace, stats, desc);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                editboxclose();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkspace;
