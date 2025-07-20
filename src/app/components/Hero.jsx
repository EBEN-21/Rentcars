import React from 'react';

const Hero = () => {
  return (
    <div className='relative mt-10 overflow-hidden'>
      <div className='group hidden lg:block'>
        <img src='/images/top.svg' width={380} className='absolute right-0 mt-[-9.5%] opacity-10 z-0' />
        <img src='/images/mid.svg' width={340} className='absolute right-16 top-[-40px] opacity-10 z-0' />
        <img src='/images/right.svg' width={180} className='absolute right-[360px] top-[2px] opacity-10 z-0' />
        <img src='/images/bottom.svg' width={380} className='absolute right-0 bottom-[-8%] opacity-10 z-0' />
      </div>

      <div className='flex items-center overflow-hidden justify-between px-4 lg:px-0'>
        <div className='lg:w-[500px] w-full relative z-10 flex flex-col text-center lg:text-left lg:pl-24'>

          <h1 className='font-semibold text-3xl sm:text-4xl lg:text-5xl mb-7'>
            Find, book and rent a car <span className='text-[#1572D3]'>Easily</span>
          </h1>

          <img src='/images/under.svg' className='hidden lg:block absolute top-24 right-8' />

          <p className='font-normal text-base sm:text-lg text-[#272727] leading-normal'>
            Get a car wherever and whenever you need it with your IOS and Android device.
          </p>

          <div className='flex items-center justify-center lg:justify-normal gap-3 mt-5'>
            <img src='/images/play.svg' className='w-[120px]' />
            <img src='/images/appstore.svg' className='w-[120px]' />
          </div>
        </div>

        <div className='hidden lg:flex items-center justify-center pt-10 animate__animated animate__fadeInUp'>
          <img src='/images/car.png' className='w-[630px] h-auto z-10' />
        </div>
      </div>

      <div className="relative z-10 container mx-auto lg:-mt-1 px-10 lg:px-20">
        <form className="bg-white w-full shadow-lg p-4 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Location Input */}
          <div className="w-full lg:w-auto md:ml-8 flex items-center gap-2">
            <img src="/images/location.svg" width={32} alt="Location Icon" />
            <div className="flex flex-col">
              <p className="pt-1 px-2 font-medium text-[#3E3E3E] text-sm sm:text-base">Location</p>
              <input
                type="text"
                placeholder="Search your location"
                className="px-2 py-1 w-full md:w-[180px] text-black text-[14px] font-normal placeholder:text-[#ACACAC]"
              />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="w-full lg:w-auto flex items-center gap-2 border-t md:border-t-0 md:border-l-2 border-[#ACACAC] md:px-4 pt-4 md:pt-0">
            <img src="/images/calendar.svg" width={32} alt="Pickup Date Icon" />
            <div className="flex flex-col">
              <p className="pt-1 px-2 font-medium text-[#3E3E3E] text-sm sm:text-base">Pickup Date</p>
              <input
                type="text"
                placeholder="Tues 15 Feb, 10:00"
                className="px-2 py-1 w-full md:w-[180px] text-black text-[14px] font-normal placeholder:text-[#ACACAC]"
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="w-full lg:w-auto flex items-center gap-2 border-t md:border-t-0 md:border-l-2 border-[#ACACAC] md:px-4 pt-4 md:pt-0">
            <img src="/images/calendar.svg" width={32} alt="Return Date Icon" />
            <div className="flex flex-col">
              <p className="pt-1 px-2 font-medium text-[#3E3E3E] text-sm sm:text-base">Return Date</p>
              <input
                type="text"
                placeholder="Tues 15 Feb, 10:00"
                className="px-2 py-1 w-full md:w-[180px] text-black text-[14px] font-normal placeholder:text-[#ACACAC]"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto flex justify-center md:justify-end pt-4 md:pt-0">
            <button
              type="submit"
              className="w-full lg:w-[160px] h-[48px] bg-blue-600 text-white p-2 rounded-[8px] font-medium text-base"
            >
              Search
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Hero;
