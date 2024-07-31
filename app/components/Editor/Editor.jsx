"use client";
import Image from "next/image";
import React, { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";
import Link from "next/link";

const Editor = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleShareClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex py-[10px] items-center justify-between min-h-[92px] w-full flex-nowrap">
        <div>
          <Link href="/">
            <div className="md:flex cursor-pointer items-center gap-1 hidden">
              <Image
                width={114}
                height={32}
                unoptimized
                src="/images/Logo wrap.svg"
                alt="logo"
                className=""
              />
            </div>
          </Link>
          <div className="md:hidden mr-2 cursor-pointer">
            <Image
              width={27}
              height={32}
              unoptimized
              src="/images/logosm.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-semibold">Untitled</h3>
          <Image
            width={24}
            height={24}
            unoptimized
            src="/images/lucide_edit.svg"
            alt="edit"
          />
        </div>
        <div className="flex items-center gap-[6px]">
          <button
            onClick={handleShareClick}
            className="px-3 ButtonShadow bg-[#3371FF] gap-1.5 rounded text-[#FFFFFF] py-2 h-9 flex items-center justify-center"
          >
            <Image
              width={20}
              height={20}
              unoptimized
              src="/images/ph_share-bold.svg"
              alt="share"
            />

            <p className="text-sm font-medium">Share</p>
          </button>
          <div className="ml-[10px] cursor-pointer">
            <Image
              width={30}
              height={30}
              unoptimized
              src="/images/Avatar.svg"
              alt="search"
            />
          </div>
        </div>
      </div>

      <ShareModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Editor;
