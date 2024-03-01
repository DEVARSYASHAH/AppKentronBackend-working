import { MdPersonAddAlt } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import React, { useState } from "react";
import { RiInformationLine } from "react-icons/ri";

interface UserPopupProps {
  onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSave = () => {
    // Validate name
    if (!name.trim()) {
      setNameError("Please enter a valid name");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // If everything is fine, close the popup
    onClose();
  };

  return (
    <div className="fixed top-1/2 left-1/2 border rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] max-w-md h-[360px] p-2 z-50">
      <div className="flex w-full flex-col h-full">
        <div className="flex w-full justify-between my-2 2xl:my-4">
          <span className="flex font-bold text-lg mx-4 w-full h-full items-center">
            <MdPersonAddAlt size={22} />
            <div className="flex mx-3">Add User</div>
          </span>
          <span onClick={onClose} className="flex cursor-pointer mx-4">
            <GrFormClose size={25} />
          </span>
        </div>
        <div className="flex flex-col justify-around  flex-1">
          {/* Name */}
          <div className="flex w-full mx-6 -mb-6 my-0">
            <span className="flex text-sm 2xl:text-base h-full items-center">
              Name
            </span>
            <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">
              | Required
            </span>
          </div>
          <div className="flex w-full">
            <input
              placeholder="Enter user name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(null); // Clear error when user types
              }}
              className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border"
            />
          </div>
          {nameError && (
            <div className="text-red-500 text-xs mx-6">{nameError}</div>
          )}

          {/* Email ID */}
          <div className="flex w-full mx-6 -mb-6  my-0">
            <span className="flex text-sm 2xl:text-base h-full items-center">
              Email ID{" "}
            </span>
            <span className="flex h-full items-center text-[#8D8D8D] text-xs 2xl:text-sm mx-2">
              | Required
            </span>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex w-full">
              <input
                placeholder="Enter email id"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null); // Clear error when user types
                }}
                className="flex p-1 2xl:p-3 h-8 2xl:h-11 w-full mx-5 rounded-lg border"
              />
            </div>
            <div className="flex w-full">
              <div className="flex w-full bg-[#E8E8E8] mt-2 text-xs text-[#161616B2] py-1 mx-6">
                <RiInformationLine className="mx-2  h-full" />
                All users will be added as viewers
              </div>
            </div>
          </div>

          {emailError && (
            <div className="text-red-500 text-xs mx-6">{emailError}</div>
          )}
        </div>
        <div className="flex w-full h-12 justify-end">
          <button
            onClick={handleSave}
            className="flex mx-2 bg-[#6528F7] text-white hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="flex mx-2 hover:bg-[#6528F7] hover:border-none justify-center items-center border text-black font-semibold w-20 h-10 rounded-lg hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
