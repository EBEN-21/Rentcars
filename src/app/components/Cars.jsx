import React from 'react'

const Cars = ({img, car, rating, review, passenger, doors, price }) => {
  return (
    <div className='w-[240px] flex flex-col items-center justify-between rounded-2xl shadow-xl p-6 bg-white hover:scale-105 transition ease-in-out duration-200 '>
      
      <div className='w-full flex items-center justify-center mb-4 mt-4 '>
        <img src={img} alt={"name of car"} className='  h-[100px] object-contain' />
      </div>

        <div className='w-[210px] flex flex-col  '>
            <div className='flex flex-col gap-1.5 '>
                <h2 className='font-medium text-base text-[#262626] '>{car}</h2>
                <div className='flex items-center- gap-1.5'>
                    <img src={'/rentals/Star 1.svg'}   />
                    <p className='font-medium text-sm '>{rating} <span className='font-normal text-[#808080] '>{review}</span> </p>
                </div>
            </div>
            
            <div className='w-full flex items-center gap-10.5  mt-4 '>
                <div className='flex items-center gap-0.5'>
                    <img src={'/rentals/user.svg'} width={20} height={20} />
                    <p className='font-normal text-xs text-[#959595] mt-1 '>{passenger} Passengers</p>
                </div>
                <div className='flex items-center gap-0.5'>
                    <img src={'/rentals/Frame (1).svg'} width={20} height={20} />
                    <p className='font-normal text-xs text-[#959595] mt-1 '>Auto</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-between mt-2   '>
                <div className='flex items-center gap-0.5'>
                    <img src={'/rentals/Frame (2).svg'} width={20} height={20} />
                    <p className='font-normal text-xs text-[#959595] mt-1'>Air Conditioning</p>
                </div>
                <div className='flex items-center gap-0.5'>
                    <img src={'/rentals/Frame (3).svg'} width={20} height={20} />
                    <p className='font-normal text-xs text-[#959595] mt-1 '>{doors} Doors </p>
                </div>
            </div>

            <div className='w-full flex flex-col mt-4 border-t border-[#E0E0E0] pt-4 gap-3 '>
                <div className='flex items-center justify-between mb-2 '>
                    <h3 className='font-normal text-sm text-[#595959] '>Price</h3>
                    <p className='font-semibold text-base'>${price}<span className='font-normal text-[#9C9C9C] text-sm '>/day</span></p>
                    
                </div>

                 <button className='bg-[#1572D3] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#051C34] transition duration-200 cursor-pointer'>
                    Rent Now →
                 </button>
            </div>
        </div>

        
    </div>
  )
}

export default Cars
