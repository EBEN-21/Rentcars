import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div className='w-full  items-center justify-center mt-20 pb-14 px-10 lg:px-0 bg-[#F7FBFF]  '>

        <div className='relative w-full hidden lg:block '>
            <img src="/rentals/“.svg" alt="" width={260} className='absolute right-40 top-0 '  />
            <img src="/rentals/“.svg" alt="" width={260} className='absolute left-40 top-20 rotate-y-180  '  />
        </div>

         <div className='flex flex-col items-center justify-center gap-5 pt-24 '>
          <h1 className='w-[161px] bg-[#1572D31A] text-center py-5 px-2 rounded-lg font-medium text-sm text-[#1572D3] '>TESTIMONIALS</h1>
          <p  className='font-medium text-[#333333] text-4xl  '>What people say about us?</p>
        </div>

        <TestimonialSlider />
    </div>
  )
}

export default Testimonial
