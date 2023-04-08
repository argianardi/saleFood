import React from 'react';

const Header = () => {
  return (
    <header className="flex items-end justify-between h-28 body-oke border-b-[1px] border-gray-lighter">
      <div className="flex flex-col justify-center h-full">
        <h2 className="mt-1 font-quicksand text-base leading-[36px] font-bold">
          Customer
        </h2>
        <p className="mt-1 font-inter text-[14px] text-gray-light">
          You can manage and organize your customer and other things here
        </p>
      </div>
      <div className="flex gap-[10px]">
        <div className="px-16 py-3 border-b-2 border-b-blue-dark">
          <a
            href="/"
            className="font-quicksand text-[14px] text-blue-dark leading-5"
          >
            Customer
          </a>
        </div>
        <div className="px-16 py-3 ">
          <a
            href="/"
            className="font-quicksand text-[14px] leading-5 text-gray-light"
          >
            Promo
          </a>
        </div>
        <div className="px-16 py-3">
          <a
            href="/"
            className="font-quicksand text-[14px] leading-5 text-gray-light"
          >
            Voucher
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
