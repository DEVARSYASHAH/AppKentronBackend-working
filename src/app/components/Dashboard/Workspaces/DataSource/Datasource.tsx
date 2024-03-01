"use client";
import React, { useState } from "react";
import slack from "../../../Assets/slack.png";
import google from "../../../Assets/google.png";
import jira from "../../../Assets/jira.png";
import confluence from "../../../Assets/confluence.png";
import microsoft from "../../../Assets/microsoft.png";
import arrowbtn from "../../../Assets/arrowbtn.png";
import imports from "../../../Assets/import.png";
import Image from "next/image";
import "./datasource.css";
import close from "../../../Assets/close.png";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TbTopologyStar3 } from "react-icons/tb";
import { BiGroup, BiSend, BiSync } from "react-icons/bi";
import { BsArchive, BsUnity } from "react-icons/bs";
import radioicon from "../../../Assets/workspaces.png";
import { CiUser } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Pagination } from "@nextui-org/react";
import sync from "../../../Assets/sync.png";
import person from "../../../Assets/padd.png";
import channel from "../../../Assets/chanl.png";
import selectcom from "../../../Assets/selcom.png";

export const DataSource = () => {
  const [slackbox, setslackbox] = useState(false);
  const [roadicon, setroadicon] = useState(0);
  const [importslack, setimportslack] = useState(false);
  const slackboxopen = () => {
    setslackbox(true);
  };
  const slackboxclose = () => {
    setslackbox(false);
  };
  const submit = () => {
    setslackbox(false);
    setroadicon(0);
  };
  const [selectAll, setSelectAll] = useState(false);
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

  // New data sourcee
  const data = new Array(50).fill(null).map((_, index) => ({
    name: `Slack Enterprise ${index + 1}`,
    mode: "One-time sync",
    dur: "10/10/2023 to 11/12/2023",
    size: "125 KB",
    status: "Complete",
    comp: "Direct message, Public message",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Replace 50 with your total number of users
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="datasource">
      <div className="flex h-[40vh] flex-col w-full border mb-2">
        <div className="flex h-[7vh] border w-full bg-[#E6E6E6] justify-between px-2 items-center">
          Existing Connections
          <FaAngleDown />
        </div>
        <div className="flex w-full h-full overflow-x-hidden overflow-y-scroll flex-col">
          <div className="flex-col flex-1 ">
            <div className="bg-white h-full  my-6 shadow-md rounded-md border">
              <table className="min-w-max bg-white w-full h- table-auto rounded-md ">
                <thead>
                  <tr className="border-b border-gray-200 py-4 text-sm font-bold leading-normal">
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
                    <th className="py-3 px-6 text-left">Sync mode</th>
                    <th className="py-3 px-6 flex mx-3 text-center">
                      Sync duration
                    </th>
                    <th className="py-3 px-8 justify-start pl-0">Status</th>
                    <th className="py-3 px-5 justify-start">Total Size</th>
                    <th className="py-3 px-5 justify-start">Components</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light">
                  {currentItems.map((user, index) => (
                    <tr className="" key={index}>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-bold flex h-12 items-center">
                            <input
                              id={`checkbox-${index}`}
                              type="checkbox"
                              checked={
                                selectAll || selectedRows.includes(index)
                              }
                              onChange={() => toggleCheckbox(index)}
                              className="w-4 h-4 mx-2 text-blue-600 bg-[#6528F7] border-[#6528F7] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#6528F7] focus:ring-2 dark:bg-[#6528F7] dark:border-[#6528F7]"
                            />{" "}
                            {user.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex text-[#161616] font-medium mx-1 text-sm h-full justify-start items-center">
                          <span>{user.mode}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="flex text-[#161616] w-10/12  h-full items-center text-left font-medium py-2 px-3 rounded-full text-xs">
                          {user.dur}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-end mr-8">
                          {user.status}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="flex text-[#161616] justify-center font-medium py-2 px-3 rounded-full text-xs">
                          {user.size}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="flex text-[#161616] justify-center font-medium py-2 px-3 rounded-full text-xs">
                          {user.comp}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
          </div>
          <div className="flex justify-between -mt-3 overflow-x-hidden bg-white lg:border py-4 2xl:border-none lg:mb-2 2xl:mb-1 items-center px-2  rounded-md ">
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
      <div className="flex w-full overflow-y-scroll h-[40vh] flex-col">
        <div className="flex h-[50vh] flex-col w-full  border mb-2">
          <div className="flex h-[8vh] border w-full bg-[#E6E6E6] items-center justify-between px-2">
            Connector Source
            <FaAngleDown />
          </div>
          <div className="enterprise px-4">
            <h4 className="font-semibold my-6">Enterprise Sources</h4>
            <div className="enterpriseproducts">
              <div className="product">
                <Image
                  src={slack}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Slack Enterprise</p>
                <button
                  onClick={() => {
                    slackboxopen();
                  }}
                >
                  <Image
                    src={arrowbtn}
                    width={15}
                    alt="none"
                    className="connectbtnicon"
                  />
                  Connect
                </button>
              </div>
              <div className="product">
                <Image
                  src={google}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Google Workspace</p>
                <button>
                  <Image
                    src={arrowbtn}
                    width={15}
                    alt="none"
                    className="connectbtnicon"
                  />
                  Connect
                </button>
              </div>
              <div className="product">
                <Image
                  src={jira}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Jira</p>
                <button>
                  <Image
                    src={arrowbtn}
                    width={15}
                    alt="none"
                    className="connectbtnicon"
                  />
                  Connect
                </button>
              </div>
              <div className="product">
                <Image
                  src={confluence}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Confluence</p>
                <button>
                  <Image
                    src={arrowbtn}
                    width={15}
                    alt="none"
                    className="connectbtnicon"
                  />
                  Connect
                </button>
              </div>
              <div className="product">
                <Image
                  src={microsoft}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Microsoft 365</p>
                <button>
                  <Image
                    src={arrowbtn}
                    width={15}
                    alt="none"
                    className="connectbtnicon"
                  />
                  Connect
                </button>
              </div>
            </div>
          </div>

          <div className="enterprise px-4">
            <h1>Non-Enterprise Sources</h1>
            <div className="enterpriseproducts">
              <div className="product">
                <Image
                  src={slack}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Slack Enterprise</p>
                <button
                  onClick={() => {
                    setimportslack(true);
                  }}
                >
                  <Image
                    src={imports}
                    width={15}
                    alt="none"
                    className="btnimporticon"
                  />
                  Import
                </button>
              </div>
              <div className="product">
                <Image
                  src={google}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Google Workspace</p>
                <button>
                  <Image
                    src={imports}
                    width={15}
                    alt="none"
                    className="btnimporticon"
                  />
                  Import
                </button>
              </div>
              <div className="product">
                <Image
                  src={jira}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Jira</p>
                <button>
                  <Image
                    src={imports}
                    width={15}
                    alt="none"
                    className="btnimporticon"
                  />
                  Import
                </button>
              </div>
              <div className="product">
                <Image
                  src={confluence}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Confluence</p>
                <button>
                  <Image
                    src={imports}
                    width={15}
                    alt="none"
                    className="btnimporticon"
                  />
                  Import
                </button>
              </div>
              <div className="product">
                <Image
                  src={microsoft}
                  width={100}
                  alt="none"
                  className="dataicons"
                />
                <p>Microsoft 365</p>
                <button>
                  <Image
                    src={imports}
                    width={15}
                    alt="none"
                    className="btnimporticon"
                  />
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className={importslack ? "slackenterprise" : "slackenterprise slackhid"}
      >
        <div className="nonenterprisecont">
          <div className="SEheadercont">
            <div className="SEheader">
              <Image src={slack} width={55} alt="none" />
              <p>Import Slack Data</p>
            </div>
            <Image
              src={close}
              width={12}
              alt="none"
              className="close"
              onClick={() => {
                setimportslack(false);
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
            <p>
              Import file<span>| Required</span>
            </p>
            <input type="file" placeholder="Choose file" />
          </div>

          <div className="Enterprisebody">
            <div className="createboxbtn slackenterprisebtn">
              <button
                onClick={() => {
                  setimportslack(false);
                }}
              >
                Close
              </button>
              <button className="savebtn nextbtn">Next</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={slackbox ? "slackenterprise" : "slackenterprise slackhid"}
      >
        <div className="enterprisecont">
          <div className="SEheadercont">
            <div className="SEheader">
              <Image src={slack} width={55} alt="none" />
              <p>Slack Enterprise</p>
            </div>
            <Image
              src={close}
              width={12}
              alt="none"
              className="close"
              onClick={() => {
                slackboxclose();
              }}
            />
          </div>
          <div className="enterpriseroadmap">
            <div className="roadmapicon">
              <div className="roadiconcont">
                <BiSend
                  className={
                    roadicon === 0
                      ? "purbg"
                      : roadicon > 0
                      ? "greenbg"
                      : "whitebg"
                  }
                />
                <p
                  className={
                    roadicon === 0
                      ? "purptext"
                      : roadicon > 0
                      ? "greentext"
                      : "whitetext"
                  }
                >
                  Connect
                </p>
              </div>
              <div
                className={
                  roadicon === 0
                    ? "purline1 purpline"
                    : roadicon > 0
                    ? "purline1 greenline"
                    : "purline1 whiteline"
                }
              ></div>
            </div>

            <div className="roadmapicon">
              <div className="roadiconcont">
                <BiSync
                  className={
                    roadicon === 1
                      ? "purbg"
                      : roadicon > 1
                      ? "greenbg"
                      : "whitebg"
                  }
                />
                <p
                  className={
                    roadicon === 1
                      ? "purptext"
                      : roadicon > 1
                      ? "greentext"
                      : "whitetext"
                  }
                >
                  Synchronization
                </p>
              </div>
              <div
                className={
                  roadicon === 1
                    ? "purline2 purpline"
                    : roadicon > 1
                    ? "purline2 greenline"
                    : "purline2 whiteline"
                }
              ></div>
            </div>

            <div className="roadmapicon">
              <div className="roadiconcont">
                <BsUnity
                  className={
                    roadicon === 2
                      ? "purbg"
                      : roadicon > 2
                      ? "greenbg"
                      : "whitebg"
                  }
                />
                <p
                  className={
                    roadicon === 2
                      ? "purptext"
                      : roadicon > 2
                      ? "greentext"
                      : "whitetext"
                  }
                >
                  Select Component
                </p>
              </div>
              <div
                className={
                  roadicon === 2
                    ? "purline3 purpline"
                    : roadicon > 2
                    ? "purline3 greenline"
                    : "purline3 whiteline"
                }
              ></div>
            </div>

            <div className="roadmapicon">
              <div className="roadiconcont">
                <MdOutlinePersonAddAlt
                  className={
                    roadicon === 3
                      ? "purbg"
                      : roadicon > 3
                      ? "greenbg"
                      : "whitebg"
                  }
                />
                <p
                  className={
                    roadicon === 3
                      ? "purptext"
                      : roadicon > 3
                      ? "greentext"
                      : "whitetext"
                  }
                >
                  Add User
                </p>
              </div>
              <div
                className={
                  roadicon === 3
                    ? "purline4 purpline"
                    : roadicon > 3
                    ? "purline4 greenline"
                    : "purline3 whiteline"
                }
              ></div>
            </div>

            <div className="roadmapicon">
              <div className="roadiconcont">
                <TbTopologyStar3
                  className={
                    roadicon === 4
                      ? "purbg"
                      : roadicon > 4
                      ? "greenbg"
                      : "whitebg"
                  }
                />
                <p
                  className={
                    roadicon === 4
                      ? "purptext"
                      : roadicon > 3
                      ? "greentext"
                      : "whitetext"
                  }
                >
                  Add Channels
                </p>
              </div>
            </div>
          </div>

          <div className={roadicon === 0 ? "" : "closehid"}>
            <ConnectBody />
          </div>
          <div className={roadicon === 1 ? "" : "closehid"}>
            <Synchronization />
          </div>
          <div className={roadicon === 2 ? "" : "closehid"}>
            <Selectcomponent />
          </div>
          <div className={roadicon === 3 ? "" : "closehid"}>
            <Adduser />
          </div>
          <div className={roadicon === 4 ? "" : "closehid"}>
            <Addchannel />
          </div>

          <div className="Enterprisebody">
            <div className="createboxbtn slackenterprisebtn">
              <button
                onClick={() => {
                  slackboxclose();
                }}
                className={roadicon > 0 ? "closehid" : ""}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setroadicon(roadicon - 1);
                }}
                className={roadicon > 0 ? "openback" : "closeback"}
              >
                Back
              </button>
              <button
                className={roadicon < 4 ? "savebtn nextbtn" : "closehid"}
                onClick={() => {
                  setroadicon(roadicon + 1);
                }}
              >
                Next
              </button>
              <button
                className={roadicon === 4 ? "savebtn nextbtn" : "closehid"}
                onClick={() => {
                  submit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ImportSlack = () => {
  return (
    <div className="ImportSlackbox">
      <div className="SEheadercont">
        <div className="SEheader">
          <Image src={slack} width={55} alt="none" />
          <p>Slack Enterprise</p>
        </div>
        <Image src={close} width={12} alt="none" className="close" />
      </div>
    </div>
  );
};

const Synchronization = () => {
  return (
    <div className="Synchronization">
      <p>Select workspaces</p>
      <div className="radiobuttons">
        <input type="radio" name="workspace" />
        <Image src={radioicon} width={14} alt="none" className="radioicons" />
        <p>Workspace 1</p>
      </div>
      <div className="radiobuttons">
        <input type="radio" name="workspace" />
        <Image src={radioicon} width={14} alt="none" className="radioicons" />
        <p>Workspace 2</p>
      </div>
      <div className="radiobuttons">
        <input type="radio" name="workspace" />
        <Image src={radioicon} width={14} alt="none" className="radioicons" />
        <p>Workspace 3</p>
      </div>

      <p className="checkboxheader">Select additional channels types</p>
      <div className="h-7 items-center text-base  flex">
        <input type="checkbox" />
        <p className="mx-2">Include multi-workspace channels</p>
      </div>
      <div className="h-7 items-center text-base  flex">
        <input type="checkbox" />
        <p className="mx-2">Include slack connect channels</p>
      </div>
    </div>
  );
};

const Selectcomponent = () => {
  return (
    <div className="component">
      <p className="checkboxheader">Select components</p>
      <div className="checkbox">
        <input type="checkbox" />
        <CiUser className="checkicons" />
        <p>Direct messages</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <BiGroup className="checkicons" />
        <p>Group messages</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <AiOutlineLock className="checkicons" />
        <p>Private channels</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>#</p>
        <p>Public channels</p>
      </div>
    </div>
  );
};

const Adduser = () => {
  return (
    <div className="Adduser">
      <div className="createboxinputs">
        <p>
          Add User <span>| Required</span>
        </p>
        <input type="email" placeholder="user@example.com" />
        <div className="addusertext">Enter email address of user</div>
      </div>
    </div>
  );
};

const Addchannel = () => {
  return (
    <div className="Addchannel">
      <div className="createboxinputs">
        <p>Filter</p>
        <input type="email" placeholder="Search Channel name" />
        <div className="filterhead">
          <div className="addusertext">Search channels to sync</div>
          <div className="channeltypes">
            <div className="channel1">
              <span>#</span>Public
            </div>
            <div className="channel1">
              <span>
                <AiOutlineLock />
              </span>
              Private
            </div>
            <div className="channel1">
              <span>
                <BsArchive />
              </span>
              Archieved
            </div>
          </div>
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>Select All</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>#</p>
        <p>Channel01</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <AiOutlineLock className="checkicons" />
        <p>Channel02</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <BsArchive className="checkicons" />
        <p>Channel03</p>
      </div>
    </div>
  );
};

const ConnectBody = () => {
  return (
    <>
      <div className="createboxinputs">
        <p>
          Name <span>| Required</span>
        </p>
        <input type="text" placeholder="Enter workspace name" />
      </div>
      <div className="createboxinputs">
        <p>
          Syncronization mode <span>| Required</span>
        </p>
        <select name="status" id="status">
          <option value="">Select Mode</option>
          <option value="mode1">Not active mode</option>
          <option value="mode1">Active mode</option>
        </select>

        <div className="datecont">
          <div className="createboxinputs">
            <p>
              From Date <span>| Required</span>
            </p>
            <input type="date" placeholder="Select date" />
          </div>
          <div className="createboxinputs">
            <p>
              To Date <span>| Required</span>
            </p>
            <input type="date" placeholder="Select date" />
          </div>
        </div>
      </div>
    </>
  );
};
