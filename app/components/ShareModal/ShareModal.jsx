import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const ShareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#020306] bg-opacity-50 backdrop-blur-sm z-50">
        <div
          className="bg-[#151E2F] min-w-[500px] rounded-[10px]"
          style={{
            boxShadow: `
          0px 8px 12px 0px #23304A0A inset,
          0px 24px 64px -16px #0000003D,
          16px 24px 64px -24px #23304A inset
        `,
          }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">
                  Manage who can view this project
                </h4>
                <p className="text-sm font-normal text-[#B4C6EE]">
                  Select which users can access and view this project.{" "}
                </p>
              </div>
              <div
                onClick={onClose}
                className="h-11 w-11 cursor-pointer flex items-center justify-center"
              >
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/x-close.svg"
                />
              </div>
            </div>
          </div>
          <div className="p-6 w-full flex gap-3 items-center justify-between">
            <div className="w-full">
              <input
                type="email"
                id="email"
                className="border h-11 w-full border-[#2E3D5B] px-4 bg-[#27344D] text-sm rounded-lg outline-none"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <button className="px-5 ButtonShadow bg-[#3371FF] rounded text-[#FFFFFF] h-10 flex items-center justify-center text-sm font-medium">
                Invite
              </button>
            </div>
          </div>
          <div className="mt-6 p-6 flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div>
                <Image
                  width={40}
                  height={40}
                  src="/images/Avatar.png"
                  unoptimized
                  alt="avatar"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Candice Wu</h4>
                <p className="text-sm font-normal text-[#B4C6EE]">
                  candice@jsmasterypro.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p>can edit</p>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
