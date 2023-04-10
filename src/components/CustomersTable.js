import React from 'react';
import Select from './Option';
import customersData from '../assets/data/customersData';
import {
  favoriteMenuSortOption,
  levelSortOption,
  nameSortOptions,
  totalTransactionSortOption,
} from '../assets/data/sortingOption';

const CustomersTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="w-[760px] md:w-full">
        <table className="w-full mt-3 border-collapse table-auto">
          <thead className="bg-white-smoke">
            <tr>
              <th className="text-start" id="customer-name">
                <Select options={nameSortOptions} />
              </th>
              <th className="text-start" id="level">
                <Select options={levelSortOption} />
              </th>
              <th className="text-start" id="favorite-menu">
                <Select options={favoriteMenuSortOption} />
              </th>
              <th className="text-start" id="total-transaction">
                <Select options={totalTransactionSortOption} />
              </th>
              <th className="text-start" id="action">
                <p className="p-[10px] text-sm font-medium hover:bg-gray-50 text-gray-light font-quicksand">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer, index) => {
              let levelClass = '';
              if (customer.level === 'Warga') {
                levelClass = 'text-[#f46b45]';
              } else if (customer.level === 'Juragan') {
                levelClass = 'text-[#2f80ed]';
              } else if (customer.level === 'Sultan') {
                levelClass = 'text-[#11998e]';
              } else {
                levelClass = 'text-[#7f00ff]';
              }

              return (
                <tr key={index}>
                  <td
                    className="text-sm font-semibold leading-5 font-quicksand text-black-lighter px-[10px] py-[14px]"
                    aria-labelledby="customer-name"
                  >
                    {customer.customerName}
                  </td>
                  <td
                    className={`px-[10px] py-[14px] leading-5 text-sm font-semibold font-quicksand ${levelClass}`}
                    aria-labelledby="level"
                  >
                    {customer.level}
                  </td>
                  <td
                    className="px-[10px] py-[14px] text-sm font-semibold leading-5 font-quicksand text-black-lighter"
                    aria-labelledby="favorite-menu"
                  >
                    {customer.favoriteMenu}
                  </td>
                  <td
                    className="px-[10px] py-[14px] text-sm font-semibold leading-5 font-quicksand text-black-lighter"
                    aria-labelledby="total-transaction"
                  >
                    {customer.totalTransaction}
                  </td>
                  <td
                    className="px-[10px] py-[14px] flex items-center justify-between"
                    aria-labelledby="action"
                  >
                    <button
                      type="button"
                      className="flex items-center px-3 py-1 duration-300 transform rounded-md bg-white-smoke hover:bg-gray-200"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M11.0978 11H11.1023"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-2 text-sm font-semibold leading-5 font-quicksand text-black-lighter">
                        Detail
                      </span>
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 duration-300 transform rounded-md bg-white-smoke hover:bg-gray-200"
                    >
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z"
                          stroke="#110D17"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6"
                          stroke="#110D17"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M1.5 11.5H10.5"
                          stroke="#110D17"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="px-3 py-2 duration-300 transform rounded-md bg-white-smoke hover:bg-gray-200"
                    >
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49"
                          stroke="#F02D3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.34"
                          d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985"
                          stroke="#F02D3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07"
                          stroke="#F02D3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.34"
                          d="M5.16501 8.75H6.83001"
                          stroke="#F02D3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.34"
                          d="M4.75 6.75H7.25"
                          stroke="#F02D3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;
