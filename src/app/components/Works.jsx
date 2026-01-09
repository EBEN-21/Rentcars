import React from 'react';
import BrandSlider from './BrandSlider';

const Works = () => {
  return (
    <div className="mt-24 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* heading */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="max-w-[161px] bg-[#1572D31A] py-4 px-6 rounded-lg font-medium text-sm text-[#1572D3]">
              HOW IT WORKS
            </h1>
            <p className="font-medium text-[#333333] text-2xl sm:text-2xl md:text-3xl">
              Rent with following 3 working steps
            </p>
          </div>

          {/* steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-[70px] mt-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-7">
              <div className="bg-[#ECF5FF] p-7 rounded-2xl flex items-center justify-center">
                <img src="/images/locate.svg" alt="Locate" width={40} />
              </div>
              <div className="max-w-[180px] text-center flex flex-col gap-2">
                <h4 className="font-medium text-base sm:text-lg">Choose location</h4>
                <p className="font-medium text-sm  text-[#6D6D6D]">
                  Choose your location and find your best car
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-7">
              <div className="bg-[#ECF5FF] p-7 rounded-2xl flex items-center justify-center">
                <img src="/images/date.svg" alt="Date" width={40} />
              </div>
              <div className="max-w-[190px] text-center flex flex-col gap-2">
                <h4 className="font-medium text-base sm:text-lg">Pick-up date</h4>
                <p className="font-medium text-sm  text-[#6D6D6D]">
                  Select your pick-up date and time to book your car
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-7">
              <div className="bg-[#ECF5FF] p-7 rounded-2xl flex items-center justify-center">
                <img src="/images/car.svg" alt="Book" width={40} />
              </div>
              <div className="max-w-[200px] text-center flex flex-col gap-2">
                <h4 className="font-medium text-base sm:text-lg">Book a car</h4>
                <p className="font-medium text-sm  text-[#6D6D6D]">
                  Book your car and we will deliver it directly to you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Slider */}
      <div className="mt-20">
        <BrandSlider />
      </div>
    </div>
  );
};

export default Works;
