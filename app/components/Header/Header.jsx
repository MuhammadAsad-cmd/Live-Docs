import Image from "next/image";
import React from "react";

const HeaderTop = () => {
  return (
    <>
      <div className="flex py-[10px] items-center justify-between min-h-[92px] w-full flex-nowrap">
        <div>
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
        <div className="flex items-center gap-[6px]">
          <div className="cursor-pointer">
            <Image
              width={40}
              height={40}
              unoptimized
              src="/images/_Nav item search.svg"
              alt="search"
            />
          </div>
          <div className="cursor-pointer">
            <Image
              width={40}
              height={40}
              unoptimized
              src="/images/_Nav item not.svg"
              alt="search"
            />
          </div>
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
    </>
  );
};

export default HeaderTop;
