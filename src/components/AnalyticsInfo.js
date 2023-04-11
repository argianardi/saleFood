import React from 'react';

const AnalyticsInfo = () => {
  return (
    <div className="relative w-full h-[265px] xs:h-[300px] sm:h-[595px] 2xl:w-[227px] lg:h-[265px] bg-blue-dark rounded-lg overflow-hidden">
      <svg
        className="absolute top-0 left-0 xs:top-10 xs:left-5 lg:left-0 lg:top-0"
        width="191"
        height="81"
        viewBox="0 0 191 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M-24.1467 79.9128L-21.6107 77.204C-19.0747 74.4952 -14.0027 69.0777 -6.50458 70.3258C0.993545 71.5739 10.9178 79.4877 17.6594 78.6575C24.4011 77.8272 27.9602 68.2529 34.1829 65.9969C40.4056 63.741 49.292 68.8032 52.173 57.3659C55.054 45.9286 51.9296 17.9916 54.7727 6.45009C57.6158 -5.09139 66.4263 -0.237373 72.6455 -2.50318C78.8647 -4.76899 82.4924 -14.1546 85.9537 -23.9975C89.4151 -33.8403 92.71 -44.1403 101.458 -39.4593C110.205 -34.7783 124.405 -15.1162 134.876 -5.70024C145.347 3.71568 152.089 2.88542 153.555 -12.4407C155.02 -27.7669 151.21 -57.5889 156.731 -61.7728C162.252 -65.9567 177.104 -44.5025 184.16 -44.4696C191.216 -44.4367 190.475 -65.8252 190.105 -76.5194L189.734 -87.2136"
          stroke="#A5A6F6"
        />
      </svg>
      <div className="absolute top-4 xs:top-10 lg:top-4 left-4 2xl:w-40 h-[90px]">
        <p className="text-xl font-semibold text-white font-quicksand">
          See analytics of the Customer Clearly
        </p>
      </div>
      <div className="z-10 absolute w-[323px] h-[323px] bg-blue-dark rounded-full border-[1px] border-purple-light left-[84px] top-[106px] xs:top-44 lg:top-[106px]" />
      <div className="z-10 absolute w-[323px] h-[323px] bg-purple-dark border-[1px] border-white top-[136px] xs:top-52 lg:top-[136px] left-[126px] rounded-full" />
      <div className="z-10 absolute w-[323px] h-[323px] top-[166px] xs:top-60 lg:top-[166px] left-[168px] rounded-full bg-purple-light border-[1px] border-gray-lightest" />
      <button
        type="button"
        className="z-20 px-4 py-3 rounded-lg absolute left-4 top-[204px] xs:top-32 lg:top-[204px] bg-white/20 hover:bg-white/40 blur-filter text-white text-sm font-semibold font-quicksand"
      >
        See Analytics
      </button>
    </div>
  );
};

export default AnalyticsInfo;
