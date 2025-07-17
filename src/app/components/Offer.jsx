import React from 'react'
import OfferCard from './OfferCard'
import 'animate.css';



const Offer = () => {
  return (
    <div className='mt-28 flex items-center justify-between lg:mr-32 mb-3   '>
      
      <div className='hidden lg:block relative animate__animated animate__fadeInUp '>
        <img src='/hero2/shape.svg' width={640}  />
        <img src="/hero2/Audi 1.png" alt="" width={620} className='absolute bottom-24' />
      </div>

      <div>

      <div className='flex flex-col gap-10 lg:w-[550px] w-full px-10 lg:px-0 items-center justify-center lg:items-start lg:justify-start '>
         <div className='flex flex-col lg:justify-start lg:items-start items-center justify-center text-center gap-3 '>
          <h1 className='max-w-[168px] bg-[#1572D31A] py-4 px-6 rounded-lg font-medium text-sm text-[#1572D3] '>WHY CHOOSE US</h1>
          <p  className='font-medium text-[#333333] text-4xl '>We offer the best experience with our rental deals</p>
        </div>

        <OfferCard
          img={'/hero2/wallet.svg'}
          title={'Best price guaranteed'}
          description={"Find a lower price? We’ll refund you 100% of the difference"}
        />
        <OfferCard
          img={'/hero2/user-tick.svg'}
          title={'Experience driver'}
          description={"Don’t have driver? Don’t worry, we have many experienced driver for you."}
        />
        <OfferCard
          img={'/hero2/24-support.svg'}
          title={'24 hour car delivery'}
          description={"Book your car anytime and we will deliver it directly to you."}
        />
        <OfferCard
          img={'/hero2/messages-2.svg'}
          title={'24/7 technical support'}
          description={"Have a question? Contact Rentcars support any time when you have problem."}
        />
      </div>
        
        
      </div>
    </div>
  )
}

export default Offer
