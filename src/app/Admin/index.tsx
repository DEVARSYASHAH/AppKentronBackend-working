import { BiUserCircle } from "react-icons/bi";
import SideBar from "./sidebar";
import Header from "./header";
import HomeMain from "./home";
import ActiveUsers from "../adminactive/page";
import DeactiveUser from "../admindeactivate/page";
import ActiveGuest from "../adminguest/page";
import OrganizationInfo from "../admininfo/page";
import OrganizationPolicies from "../adminpolicies/page";
import ManageSources from "../adminsources/page";
import SetupSso from "../adminsso/page";
import AdminUsage from "../adminusage/page";
import "../Admin/admin.css";

const Admin = () => {
  return (
    <div className="flex text-black flex-col bg-[#ede4ff] h-[100vh] justify-between w-full">
      <div className="flex h-20 bg-black text-white">
        <Header />
      </div>
      <div className="flex w-full flex-1 overflow-y-scroll">
        <div className="flex w-[20%] 2xl:w-[16%] overflow-y-scroll">
          <SideBar />
        </div>
        <div className="flex flex-1 flex-col h-full">
         <HomeMain />
         {/* <ActiveUsers />
         <DeactiveUser />
         <ActiveGuest />
         <OrganizationInfo />
         <OrganizationPolicies />
         <ManageSources />
         <SetupSso />
         <AdminUsage /> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
