"use client";
import React, { useState } from "react";
import "./sidebar.css";
import add from "../Assets/add.png";
import copy from "../Assets/file_copy.png";
import share from "../Assets/share.png";
import ungroup from "../Assets/ungroup.png";
import settings from "../Assets/settings_account_box.png";
import close from "../Assets/close.png";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  switchToAllWorkspace: () => void;
  switchToSingleWorkspace: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  switchToAllWorkspace,
  switchToSingleWorkspace,
}) => {
  const [createbox, setcreatebox] = useState(false);
  const createboxshow = () => {
    setcreatebox(true);
  };
  const createboxclose = () => {
    setcreatebox(false);
  };

  //hi

  return (
    <nav className="sidebar">
      <div
        className="sideadd"
        onClick={() => {
          createboxshow();
        }}
      >
        <Image src={add} width={30} alt="none" className="adds" />
        <p>Create Workspace</p>
      </div>
      <div className="sideitems" onClick={switchToAllWorkspace}>
        <Image src={copy} width={30} alt="none" className="sideicon" />
        <p>All Workspaces</p>
      </div>
      <div className="sideitems">
        <Image src={share} width={30} alt="none" className="sideicon" />
        <p>Share with me</p>
      </div>
      <div className="sideitems">
        <Image
          src={ungroup}
          width={30}
          alt="none"
          className="sideicon expicon"
        />
        <p>My Exports</p>
      </div>
      <Link href="/adminhome" target="_blank">
        <div className="sideitems">
          <Image src={settings} width={30} alt="none" className="sideicon" />
          <p>Admin</p>
        </div>
      </Link>

      <div className={createbox ? "workspacecreation" : "createworkspacehid"}>
        <div className="createbox">
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
                switchToSingleWorkspace();
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
    </nav>
  );
};

export default Sidebar;
