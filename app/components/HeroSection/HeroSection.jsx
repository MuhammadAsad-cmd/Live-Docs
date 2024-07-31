"use client";
import Image from "next/image";
import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import Link from "next/link";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto max-w-[740px] mt-8 w-full">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className="text-[30px] font-bold leading-9">All documents</h3>
          </div>
          <div>
            <button className="px-3 ButtonShadow bg-[#3371FF] gap-1.5 rounded text-[#FFFFFF] py-2 h-9 flex items-center justify-center">
              <Image
                width={20}
                height={20}
                unoptimized
                src="/images/plus.svg"
                alt="plus"
              />

              <p className="text-sm font-medium">Start a blank document</p>
            </button>
          </div>
        </div>
        <div className="mt-[50px]">
          <Link href="/editor">
            <div className="flex items-center mb-6 justify-between p-5 bg-[#151E2FF5] border border-[#2B3B5AB2] shadow-[#23304A0A] rounded-lg">
              <div className="flex gap-4 items-center">
                <div className="w-[60px] h-[60px] bg-[#2A3A59] flex items-center justify-center rounded-md cursor-pointer">
                  <Image
                    width={44}
                    height={44}
                    unoptimized
                    src="/images/docs.svg"
                    alt="docs"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    JSM New Project Requirement
                  </h2>
                  <p className="text-sm font-normal text-[#B4C6EE] mt-1">
                    Created about 03 hours ago
                  </p>
                </div>
              </div>
              <div
                onClick={handleDeleteClick}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#10182b] cursor-pointer"
              >
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/trash-01.svg"
                  alt="trash"
                />
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-between p-5 bg-[#151E2FF5] border border-[#2B3B5AB2] shadow-[#23304A0A] rounded-lg">
            <div className="flex gap-4 items-center">
              <div className="w-[60px] h-[60px] bg-[#2A3A59] flex items-center justify-center rounded-md cursor-pointer">
                <Image
                  width={44}
                  height={44}
                  unoptimized
                  src="/images/Docs.svg"
                  alt="docs"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  JSM New Project Requirement
                </h2>
                <p className="text-sm font-normal text-[#B4C6EE] mt-1">
                  Created about 03 hours ago
                </p>
              </div>
            </div>
            <div
              onClick={handleDeleteClick}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#10182b] cursor-pointer"
            >
              <Image
                width={20}
                height={20}
                unoptimized
                src="/images/trash-01.svg"
                alt="trash"
              />
            </div>
          </div>
        </div>
      </div>

      <DeleteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default HeroSection;
