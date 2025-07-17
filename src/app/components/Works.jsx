import React from 'react'
import BrandSlider from './BrandSlider'

const Works = () => {
  return (
    <div className='mt-28 px-10 lg:px-0 '>
      <div className='container mx-auto  '>
      <div className=' flex flex-col items-center justify-center'>

        {/* heading */}
          <div className='flex flex-col items-center gap-6  text-center'>
            <h1 className='max-w-[161px] bg-[#1572D31A] py-4 px-6 rounded-lg font-medium text-sm text-[#1572D3] '>HOW IT WORKS</h1>
            <p  className='font-medium text-[#333333] text-4xl '>Rent with following 3 working steps</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-[120px] mt-10'>

          {/* first div */}
            <div className='flex flex-col items-center justify-center gap-7 '>
              {/* image div */}
              <div className='bg-[#ECF5FF] w-[112px] h-[112px] rounded-2xl flex items-center justify-center'>
                <img src="/images/locate.svg" alt="" width={48} />
              </div>
              <div className='max-w-[170px] md:text-center flex flex-col items-center justify-center gap-2'>
                <h4 className='font-medium text-xl'>Choose location</h4>
                <p className='font-medium text-sm text-[#6D6D6D] text-center '>Choose your and find your best car</p>
              </div>
            </div>

          {/* second div */}
            <div className='flex flex-col items-center justify-center gap-7 '>
              {/* image div */}
              <div className='bg-[#ECF5FF] w-[112px] h-[112px] rounded-2xl flex items-center justify-center'>
                <img src="/images/date.svg" alt="" width={48} />
              </div>
              <div className='max-w-[210px] flex flex-col items-center justify-center  gap-2'>
                <h4 className='font-medium text-xl'>Pick-up-date</h4>
                <p className='font-medium text-sm text-[#6D6D6D] text-center '>Select your pick up date and time to book your car</p>
              </div>
            </div>

          {/* third div */}
            <div className='flex flex-col items-center justify-center gap-7 '>
              {/* image div */}
              <div className='bg-[#ECF5FF] w-[112px] h-[112px] rounded-2xl flex items-center justify-center'>
                <img src="/images/car.svg" alt="" width={48} />
              </div>
              <div className='max-w-[224px] flex flex-col items-center justify-center mt gap-2'>
                <h4 className='font-medium text-xl'>Book a car</h4>
                <p className='font-medium text-sm text-[#6D6D6D] text-center '>Book your car and we will deliver it directly to you</p>
              </div>
            </div>

        </div>

      </div>
    </div>

    <BrandSlider />

    </div>
  )
}

export default Works
