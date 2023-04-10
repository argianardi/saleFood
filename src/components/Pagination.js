import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const Pagination = () => {
  return (
    <div className="flex flex-col items-start justify-between px-1 py-2 rounded-lg xs:px-3 lg:items-center lg:flex-row bg-white-smoke">
      <p className="text-base font-semibold font-quicksand text-gray-light">
        Showing 10 Data Customers
      </p>
      <div className="flex items-center h-8 mx-auto mt-4 lg:mx-0 lg:mt-0">
        <button
          type="button"
          className="px-4 py-2 text-sm font-bold bg-white rounded-md shadow-sm font-quicksand"
        >
          1
        </button>
        <button
          type="button"
          className="text-sm btn btn-ghost font-quicksand text-gray-medium"
        >
          2
        </button>
        <button
          type="button"
          className="text-sm btn btn-ghost font-quicksand text-gray-medium"
        >
          3
        </button>
        <button
          type="button"
          className="text-sm btn btn-ghost font-quicksand text-gray-medium"
        >
          ...
        </button>
        <button
          type="button"
          className="text-sm btn btn-ghost font-quicksand text-gray-medium"
        >
          38
        </button>
        <button
          type="button"
          className="flex items-center text-sm btn btn-ghost font-quicksand text-gray-medium"
        >
          <p className="mr-0 xs:mr-2">Next</p>
          <HiArrowLongRight size={25} className="text-sm xs:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
