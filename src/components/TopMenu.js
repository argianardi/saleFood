import React from 'react';

const TopMenu = () => {
  return (
    <div className="bg-white-smoke w-[227px] rounded-lg">
      <div className="mx-4 mt-4">
        <div>
          <p className="text-2xl font-quicksand">
            <span className="font-medium text-black">Top Menu</span> <br />
            <span className="font-semibold text-burnt-orange">This Week</span>
          </p>
          <p className="mt-3 text-xs font-inter text-gray-light">
            10 - 12 Agustus 2023
          </p>
        </div>
        <div className="bg-white shadow-md p-[10px] mt-3 relative">
          <div className="absolute px-2 bg-burnt-orange shadow-box transform rotate-[8deg] right-0 -top-2">
            <p className="text-sm font-bold text-white font-quicksand">1</p>
          </div>
          <p className="text-sm font-bold text-black font-quicksand">
            Nasi Goreng Jamur Special Resto Pak Min
          </p>
        </div>
        <div className="flex flex-col gap-6 p-[10px] mt-2">
          <div>
            <p className="text-xs font-semibold font-quicksand text-gray-light">
              2. Tongseng Sapi Gurih
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold font-quicksand text-gray-light">
              3. Nasi Gudeg Telur Ceker
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold font-quicksand text-gray-light">
              4. Nasi Ayam Serundeng
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold font-quicksand text-gray-light">
              5. Nasi Goreng Seafod
            </p>
          </div>
        </div>
      </div>
      <div>
        <svg
          width="227"
          height="228"
          viewBox="0 0 227 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-2.94362 150.026L-5.91148 152.676L-5.91148 229.709L233.741 229.709L233.741 1.00004L232.249 13.6106C230.757 26.2211 227.772 51.4421 220.83 49.9454C213.887 48.4487 202.985 20.2343 196.822 23.997C190.658 27.7597 189.232 63.4994 185.127 81.1592C181.023 98.819 174.239 98.3989 165.562 85.1992C156.885 71.9995 146.315 46.0203 138.513 38.7263C130.712 31.4322 125.678 42.8232 120.56 53.644C115.442 64.4647 110.24 74.7153 103.722 76.0856C97.2035 77.4559 89.3697 69.9461 84.5656 82.8855C79.7616 95.8249 77.9873 129.214 73.164 142.023C68.3407 154.833 60.4684 147.063 53.9485 148.421C47.4285 149.779 42.2609 160.265 35.4775 159.845C28.6941 159.425 20.2949 148.098 13.1274 145.086C5.95994 142.074 0.0242315 147.375 -2.94362 150.026Z"
            fill="url(#paint0_linear_1_565)"
            stroke="#F17300"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_565"
              x1="97"
              y1="-309.5"
              x2="97"
              y2="180"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F17300" />
              <stop offset="1" stopColor="#F17300" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TopMenu;
