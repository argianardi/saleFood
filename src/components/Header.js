import React from 'react';

const Header = () => {
  return (
    <header className="h-auto flex flex-col md:flex-row items-end justify-between md:h-28 body-oke border-b-[1px] border-gray-lighter">
      <div className="flex flex-col justify-center w-full h-full mt-6 md:w-auto md:mt-0">
        <h2 className="mt-0 md:mt-1 font-quicksand text-2xl text-black leading-[36px] font-bold">
          Customer
        </h2>
        <p className="mt-0 text-sm md:mt-1 font-inter text-gray-light">
          You can manage and organize your customer and other things here
        </p>
      </div>
      <div className="flex gap-0 md:gap-5 lg:gap-[10px] justify-between w-full md:w-auto">
        <div className="px-4 py-3 border-b-2 lg:px-16 md:px-4 sm:px-16 border-b-blue-dark ">
          <a
            href="/"
            className="font-quicksand font-semibold text-[14px] text-blue-dark leading-5"
          >
            Customer
          </a>
        </div>
        <div className="px-4 py-3 md:px-4 lg:px-16 sm:px-16">
          <a
            href="/"
            className="font-quicksand font-semibold text-[14px] leading-5 text-gray-light"
          >
            Promo
          </a>
        </div>
        <div className="px-4 py-3 md:px-4 lg:px-16 sm:px-16">
          <a
            href="/"
            className="font-quicksand font-semibold text-[14px] leading-5 text-gray-light"
          >
            Voucher
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
