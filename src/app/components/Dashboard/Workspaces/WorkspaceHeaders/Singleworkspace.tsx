"use client";
import React, { useState } from "react";
import "./singleworkspace.css";
import { GoHome } from "react-icons/go";
import { BsDiagram2 } from "react-icons/bs";
import { MdContentPasteSearch, MdOutlineSettings } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { DataSource } from "../DataSource/Datasource";
import { Export } from "../Export/Export";
import { Home } from "../Home/Home";
import { Searches } from "../Searches/Searches";
import { Setting } from "../Setting/setting";

const Singleworkspace = () => {
  const [home, sethome] = useState(true);
  const [datasource, setdatasource] = useState(false);
  const [searches, setsearches] = useState(false);
  const [exports, setexports] = useState(false);
  const [setting, setsetting] = useState(false);

  const homeopen = () => {
    sethome(true);
    setdatasource(false);
    setsearches(false);
    setexports(false);
    setsetting(false);
  };
  const datasourceopen = () => {
    sethome(false);
    setdatasource(true);
    setsearches(false);
    setexports(false);
    setsetting(false);
  };
  const searchesopen = () => {
    sethome(false);
    setdatasource(false);
    setsearches(true);
    setexports(false);
    setsetting(false);
  };
  const exportopen = () => {
    sethome(false);
    setdatasource(false);
    setsearches(false);
    setexports(true);
    setsetting(false);
  };
  const settingopen = () => {
    sethome(false);
    setdatasource(false);
    setsearches(false);
    setexports(false);
    setsetting(true);
  };
  return (
    <section className="singleworkspace">
      <p className="flex font-extrabold items-center h-12 text-xl">Workspace Name</p>
      <div className="workspaceheaders">
        <div
          className={home ? "headitems headbold" : "headitems"}
          onClick={() => {
            homeopen();
          }}
        >
          <GoHome className="headicons" />
          <p>Home</p>
        </div>
        <div
          className={datasource ? "headitems headbold" : "headitems"}
          onClick={() => {
            datasourceopen();
          }}
        >
          <BsDiagram2 className="headicons" />
          <p>Data Source</p>
        </div>
        <div
          className={searches ? "headitems headbold" : "headitems"}
          onClick={() => {
            searchesopen();
          }}
        >
          <MdContentPasteSearch className="headicons" />
          <p>Searches</p>
        </div>
        <div
          className={exports ? "headitems headbold" : "headitems"}
          onClick={() => {
            exportopen();
          }}
        >
          <PiExportBold className="headicons" />
          <p>Export</p>
        </div>
        <div
          className={setting ? "headitems headbold" : "headitems"}
          onClick={() => {
            settingopen();
          }}
        >
          <MdOutlineSettings className="headicons" />
          <p>Setting</p>
        </div>
      </div>
      {home ? <Home /> : <></>}
      {datasource ? <DataSource /> : <></>}
      {searches ? <Searches /> : <></>}
      {exports ? <Export /> : <></>}
      {setting ? <Setting /> : <></>}
    </section>
  );
};

export default Singleworkspace;
