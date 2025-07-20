import React from 'react'
import Cars from './Cars'

const Rentals = () => {
  return (
    <div className='container mx-auto mt-20 px-4 flex items-center justify-center flex-col  '>
      <div className='flex flex-col items-center justify-center gap-5 '>
          <h1 className='max-w-[228px] bg-[#1572D31A] py-4 px-6 rounded-lg font-medium text-sm text-[#1572D3] '>POPULAR RENTAL DEALS</h1>
          <p  className='font-medium text-[#333333] text-4xl text-center'>Most popular cars rental deals</p>
        </div>

        <div className='mt-10 flex flex-wrap md:flex-row items-center justify-center gap-14 '>
          <Cars
            img={'/rentals/image 12.png'}
            car={'Jaguar XE L P250'}
            rating={4.8}
            review={'(2.436 reviews)'}
            passenger={4}
            doors={4}
            price={1800}
          />
          <Cars
            img={'/rentals/Audi 1 (1).png'}
            car={'Audi R8'}
            rating={4.6}
            review={'(1,936 reviews)'}
            passenger={2}
            doors={2}
            price={2100}
          />
          <Cars
            img={'/rentals/image 13.png'}
            car={'BMW M3'}
            rating={4.5}
            review={'(2.036 reviews)'}
            passenger={4}
            doors={4}
            price={1600}
          />
          <Cars
            img={'/rentals/image 11.png'}
            car={'Jaguar XE L P250'}
            rating={4.3}
            review={'(2.236 reviews)'}
            passenger={2}
            doors={2}
            price={2300}
          />
        </div>

        <div className='mt-10 flex items-center justify-center '>
          <button className='w-[216px] h-[48px] text-[#4E4E4E] border border-[#E0E0E0] p-2 rounded-lg text-sm font-medium hover:bg-[#1572D3] hover:text-white transition duration-200 cursor-pointer'>  
            Show all vehicles →
          </button>
        </div>
          
    </div>
  )
}

export default Rentals
