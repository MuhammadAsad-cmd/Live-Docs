import Image from "next/image";
import React from "react";

const DeleteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#020306] bg-opacity-50 backdrop-blur-sm z-50">
        <div
          className="bg-[#151E2F] min-w-[400px] rounded-[10px]"
          style={{
            boxShadow: `
              0px 8px 12px 0px #23304A0A inset,
              0px 24px 64px -16px #0000003D,
              16px 24px 64px -24px #23304A inset
            `,
          }}
        >
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="cursor-pointer">
                <Image
                  width={48}
                  height={48}
                  unoptimized
                  src="/images/Featured icon.svg"
                />
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
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Delete document</h4>
              <p className="text-sm text-[#B4C6EE] font-normal max-w-[352px]">
                Are you sure you want to delete this document? This action
                cannot be undone.
              </p>
            </div>
          </div>
          <div className="px-6 h-24 flex items-center justify-center gap-3">
            <button className="bg-[#EF4444] rounded-lg border border-[#2E3D5B] shadow-[#1018280D] shadow w-full px-3 h-10 flex items-center justify-center">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
