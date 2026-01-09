import React from 'react';

const Hero2 = () => {
  return (
    <div className='relative w-full h-full  overflow-hidden '>

      {/* Background Vector - Only for Large Screens */}
      <div className='relative hidden lg:block'>
        <img src="/hero2/Vector (4).svg" alt="" className='absolute' />
      </div>

      {/* Content Wrapper */}
      <div className='flex flex-col lg:flex-row items-center justify-between mx-auto px-3 lg:px-14 '>

        {/* Text Section */}
        <div className='lg:max-w-[400px] w-full pt-14 lg:ml-10 text-center flex flex-col items-center lg:items-start lg:text-left'>

          <h1 className='w-[148px] text-center bg-[#1572D31A] py-4 px-6 mb-6 rounded-lg font-medium text-sm text-[#1572D3]'>
            DOWNLOAD
          </h1>

          <h1 className='font-semibold text-2xl sm:text-4xl lg:text-4xl text-[#282828] leading-tight'>
            Download Rentcars App for <span className='text-[#1572D3]'>FREE</span>
          </h1>

          <p className='font-normal text-sm text-[#272727] leading-normal my-5'>
            For faster, easier booking and exclusive deals.
          </p>

          <div className='flex items-center gap-3 '>
            <img src='/images/play.svg' className='w-[100px]' />
            <img src='/images/appstore.svg'className='w-[100px]' />
          </div>

        </div>

        {/* iPhone Mockup - Only on Large Screens */}
        <div className='mt-16 hidden lg:block'>
          <img src="/images/iPhone 14 Pro Space Black Mockup.svg" alt="" width={400} />
        </div>

      </div>
    </div>
  );
};

export default Hero2;
