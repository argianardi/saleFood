import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import hero from '../assets/images/hero.png';

const Hero = () => {
  return (
    <div className="h-56 xs:h-52 min-[500px]:h-[167px] lg:h-[150px] 2xl:h-[167px] relative bg-blue-dark rounded-lg overflow-hidden w-full 2xl:w-[950px]">
      <img
        src={hero}
        alt="hero"
        className="absolute right-0 z-10 object-cover object-center h-full sm:-right-28 md:right-0 "
      />
      <div className="absolute z-40 flex flex-col justify-between w-full h-full p-1 xs:p-3">
        <div className="max-w-[350px]">
          <h2 className="text-xl font-bold text-white font-quicksand leading-[30px]">
            Customer
          </h2>
          <p className="text-xs leading-6 font-inter text-[#ebfffe]">
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </p>
        </div>
        <div className="flex min-[500px]:hidden items-center justify-between py-1 pl-2 sm:pl-4 pr-1 bg-white rounded-lg bg-gradient-to-r from-white via-white-25 to-white-25 w-62 sm:w-auto min-[1150px]:w-[424px] xl:w-auto 2xl:w-[424px]">
          <form className="flex items-center text-gray-400">
            <svg
              width="21"
              height="22"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66668 14.5C11.1645 14.5 14 11.6645 14 8.16666C14 4.66886 11.1645 1.83333 7.66668 1.83333C4.16887 1.83333 1.33334 4.66886 1.33334 8.16666C1.33334 11.6645 4.16887 14.5 7.66668 14.5Z"
                stroke="#D1D0D3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M14.6667 15.1667L13.3333 13.8333"
                stroke="#D1D0D3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Customer"
              className="px-2 py-1 text-sm font-medium bg-transparent w-[135px] focus:outline-none sm:w-auto font-quicksand text-gray-lighter placeholder:text-gray-lighter placeholder:font-quicksand placeholder:text-sm placeholder:font-medium"
            />
          </form>
          <button
            type="button"
            className="p-2 text-sm font-bold text-white rounded-lg sm:px-4 bg-blue-dark hover:bg-blue-700 font-quicksand"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <button
              type="button"
              className="flex items-center px-3 py-3 xs:px-1 xs:py-2 min-[500px]:px-3 min-[500px]:py-3 rounded-lg xs:rounded-sm min-[500px]:rounded-lg blur-filter bg-white/20 hover:bg-white/40"
            >
              <AiOutlinePlus className="text-white" />
              <span className="hidden xs:block min-[500px]:hidden ml-3 xs:ml-1 min-[500px]:ml-3 text-sm font-semibold text-white font-quicksand md:block">
                Add New Customer
              </span>
            </button>
          </div>
          <div className="hidden min-[500px]:flex items-center justify-between py-1 pl-2 sm:pl-4 pr-1 bg-white rounded-lg bg-gradient-to-r from-white via-white-25 to-white-25 w-62 sm:w-auto min-[1150px]:w-[424px] xl:w-auto 2xl:w-[424px]">
            <form className="flex items-center text-gray-400">
              <svg
                width="21"
                height="22"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66668 14.5C11.1645 14.5 14 11.6645 14 8.16666C14 4.66886 11.1645 1.83333 7.66668 1.83333C4.16887 1.83333 1.33334 4.66886 1.33334 8.16666C1.33334 11.6645 4.16887 14.5 7.66668 14.5Z"
                  stroke="#D1D0D3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M14.6667 15.1667L13.3333 13.8333"
                  stroke="#D1D0D3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Customer"
                className="px-2 py-1 text-sm font-medium bg-transparent w-[135px] focus:outline-none sm:w-auto font-quicksand text-gray-lighter placeholder:text-gray-lighter placeholder:font-quicksand placeholder:text-sm placeholder:font-medium"
              />
            </form>
            <button
              type="button"
              className="p-2 text-sm font-bold text-white rounded-lg sm:px-4 bg-blue-dark hover:bg-blue-700 font-quicksand"
            >
              Search
            </button>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center px-4 py-3 xs:px-1 xs:py-2 min-[500px]:px-3 min-[500px]:py-3 rounded-lg xs:rounded-sm min-[500px]:rounded-lg  blur-filter hover:bg-white/40 bg-white/20"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.6 1.89999H12.4C13.1333 1.89999 13.7333 2.49999 13.7333 3.23333V4.69999C13.7333 5.23333 13.4 5.89999 13.0667 6.23333L10.2 8.76666C9.8 9.09999 9.53333 9.76666 9.53333 10.3V13.1667C9.53333 13.5667 9.26667 14.1 8.93333 14.3L8 14.9C7.13333 15.4333 5.93333 14.8333 5.93333 13.7667V10.2333C5.93333 9.76666 5.66667 9.16666 5.4 8.83333L2.86667 6.16666C2.53333 5.83333 2.26667 5.23333 2.26667 4.83333V3.29999C2.26667 2.49999 2.86667 1.89999 3.6 1.89999Z"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden xs:block min-[500px]:hidden ml-3 xs:ml-1 min-[500px]:ml-3 text-sm font-semibold text-white font-quicksand min-[820px]:block">
                Filter
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center px-4 py-3 xs:px-1 xs:py-2 min-[500px]:px-3 min-[500px]:py-3 rounded-lg xs:rounded-sm min-[500px]:rounded-lg  blur-filter hover:bg-white/40 bg-white/20"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33333 8.49999C1.33333 4.81999 4.29333 1.83333 8 1.83333C12.4467 1.83333 14.6667 5.53999 14.6667 5.53999M14.6667 5.53999V2.20666M14.6667 5.53999H11.7067"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M14.5933 8.5C14.5933 12.18 11.6067 15.1667 7.92667 15.1667C4.24667 15.1667 2 11.46 2 11.46M2 11.46H5.01333M2 11.46V14.7933"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden xs:block min-[500px]:hidden ml-3 xs:ml-1 min-[500px]:ml-3 text-sm font-semibold text-white font-quicksand min-[820px]:block">
                Refresh
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center px-4 py-3 xs:px-2 xs:py-[9.5px] min-[500px]:px-3 min-[500px]:py-3 rounded-lg xs:rounded-sm min-[500px]:rounded-lg  blur-filter hover:bg-white/40 bg-white/20"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M4.83334 5.16666H11.1667V3.83333C11.1667 2.49999 10.6667 1.83333 9.16668 1.83333H6.83334C5.33334 1.83333 4.83334 2.49999 4.83334 3.83333V5.16666Z"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 10.5V13.1667C10.6667 14.5 10 15.1667 8.66668 15.1667H7.33334C6.00001 15.1667 5.33334 14.5 5.33334 13.1667V10.5H10.6667Z"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.16667V10.5C14 11.8333 13.3333 12.5 12 12.5H10.6667V10.5H5.33333V12.5H4C2.66667 12.5 2 11.8333 2 10.5V7.16667C2 5.83334 2.66667 5.16667 4 5.16667H12C13.3333 5.16667 14 5.83334 14 7.16667Z"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3333 10.5H10.5267H4.66666"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M4.66666 7.83333H6.66666"
                  stroke="white"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-30 flex flex-wrap w-full h-full opacity-10 bg-dots" />
    </div>
  );
};

export default Hero;
