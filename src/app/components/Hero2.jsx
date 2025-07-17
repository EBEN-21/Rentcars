import React from 'react'

const Hero2 = () => {
  return (
    <div className=''>
        <div className='relative hidden lg:block'>
            <img src="/hero2/Vector (4).svg" alt="" className='absolute' /> 
        </div>

    <div className='flex items-center justify-between relative container mx-auto lg:px-24 px-10  '>

        <div className='lg:max-w-[480px] w-full relative z-10 pt-14 ml-3 text-center flex flex-col items-center lg:items-start lg:text-left'>
             <h1 className='w-[168px]  text-center bg-[#1572D31A] py-4 px-6  mb-4 rounded-lg font-medium text-sm text-[#1572D3] '>DOWNLOAD</h1>
            <h1 className='font-semibold text-5xl  text-[#282828]  leading-tight'>Download Rentcars App for <span className='text-[#1572D3] '>FREE</span> </h1>
            <p className='font-normal text-lg text-[#272727] leading-normal my-7 '>For faster, easier booking and exclusive deals.</p>

            <div className='flex items-center gap-3 mt-5'>
                <img src='/images/play.svg'/>
                <img src='/images/appstore.svg'/>
            </div>  
        </div>
        <div className='mt-16 hidden lg:block'>
            <img src="/images/iPhone 14 Pro Space Black Mockup.svg" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero2
