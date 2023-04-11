import React, { useState } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const startIndex = currentPage - 1;
    const endIndex = startIndex + 3;

    return pageNumbers.slice(startIndex, endIndex).map((pageNumber) => (
      <button
        key={pageNumber}
        type="button"
        className={`px-4 py-2 text-sm font-bold duration-300 transform rounded-md font-quicksand ${
          pageNumber === currentPage
            ? 'bg-white shadow-sm'
            : 'text-gray-medium hover:bg-white hover:shadow-sm'
        }`}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="flex flex-col items-start justify-between px-1 py-2 mt-8 rounded-lg lg:mt-16 xs:px-1 lg:items-center lg:flex-row bg-white-smoke">
      <p className="text-base font-semibold font-quicksand text-gray-light">
        Showing 10 Data Customers
      </p>
      <div className="flex items-center h-8 mx-auto mt-4 lg:mx-0 lg:mt-0">
        {currentPage > 1 && (
          <button
            type="button"
            className="flex items-center px-1 min-[430]:px-4 py-2 text-sm font-bold duration-300 transform rounded-md font-quicksand text-gray-medium hover:bg-white hover:shadow-sm"
            onClick={handleClickPrev}
          >
            <HiArrowLongLeft size={25} className="text-sm xs:text-3xl" />
            <span className="hidden ml-0 xs:block xs:ml-2">Prev</span>
          </button>
        )}
        {renderPagination()}
        {currentPage < totalPages - 2 && (
          <>
            <span className="px-4 py-2 text-sm font-bold duration-300 transform rounded-md font-quicksand text-gray-medium">
              ...
            </span>
            <button
              type="button"
              className="flex items-center px-1 min-[430]:px-4 py-2 text-sm font-bold duration-300 transform rounded-md font-quicksand text-gray-medium hover:bg-white hover:shadow-sm"
              onClick={handleClickNext}
            >
              <span className="hidden mr-0 xs:block xs:mr-2">Next</span>
              <HiArrowLongRight size={25} className="text-sm xs:text-3xl" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
