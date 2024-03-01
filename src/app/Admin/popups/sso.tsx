"use client";
import {GrFormClose} from "react-icons/gr";

interface SsoPopupProps {
  onClose: () => void;
}

const SsoPopup: React.FC<SsoPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[40%] 2xl:w-[30%] h-[600px] rounded-lg p-2 shadow-md z-50">
    <div className="flex w-full flex-col h-full">
      <div className="flex w-full justify-between my-1 2xl:my-4">
        <span className="flex font-bold text-base 2xl:text-lg mx-4">Add SSO</span>
        <span onClick={onClose} className="flex cursor-pointer mx-4"><GrFormClose size={25} /></span>
      </div>
      <div className="flex flex-col justify-around flex-1">
        <div className="flex w-full mx-6 my-2">
          <span className="flex text-sm 2xl:text-base h-full items-center">SSO Name</span>
          <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full">
          <input placeholder="Enter the Workspace name" type="text" className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border" />
        </div>

        <div className="flex w-full mx-6 my-2">
          <span className="flex text-sm 2xl:text-base h-full items-center">SAML 2.0 Endpoint URL </span>
          <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full">
          <input placeholder="http://" type="text" className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border" />
        </div>

        <div className="flex w-full mx-6 my-2">
          <span className="flex text-sm 2xl:text-base h-full items-center">Identity provider Issuer URL</span>
          <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full">
          <input placeholder="http://" type="text" className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border" />
        </div>

        <div className="flex w-full mx-6 my-2">
          <span className="flex text-sm 2xl:text-base h-full items-center">Service provider Issuer URL</span>
          <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full">
          <input placeholder="Enter Url" type="text" className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border" />
        </div>

        <div className="flex w-full mx-6 my-2">
          <span className="flex text-sm 2xl:text-base h-full items-center">Public (X.509) Certificate </span>
          <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full">
          <textarea placeholder="Active" className="flex p-1 2xl:p-3 h-24 2xl:h-32 w-full mx-5 rounded-lg border" />
        </div>

        <div className="flex w-full mx-6 my-2">
          <span className="flex text-sm 2xl:text-base h-full items-center">Service provider Issuer URL</span>
          <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">| Required</span>
        </div>
        <div className="flex w-full mx-4">
          <input placeholder="Active" type="checkbox" className="flex hover:border-[#6528F7] p-3 h-6 w-6 mx-2 rounded-lg border" />
          File Name
        </div>
      </div>
      <div className="flex w-full h-12 justify-end">
        <button className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white">save</button>
        <button onClick={onClose} className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white">cancel</button>
      </div>
    </div>
    </div>
  );
};

export default SsoPopup;
