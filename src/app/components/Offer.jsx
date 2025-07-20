'use client';
import React from 'react';
import OfferCard from './OfferCard';
import 'animate.css';

const Offer = () => {
  return (
    <div className='mt-20 px-4 lg:px-0 lg:pr-10 mb-12 '>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

        {/* Image Section (Hidden on Small Screens) */}
        <div className='hidden lg:block relative w-[640px]  overflow-hidden animate__animated animate__fadeInUp'>
          <img src='/hero2/shape.svg' alt='Background Shape' className='w-full object-cover' />
          <img
            src='/hero2/Audi 1.png'
            alt='Audi Car'
            className='absolute left-0 bottom-24 w-full max-w-[620px]'
          />
        </div>

        {/* Content Section */}
        <div className='flex flex-col gap-8 w-full max-w-[600px] items-center lg:items-start text-center lg:text-left'>

          {/* Heading */}
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <h1 className='bg-[#1572D31A] py-2 px-4 sm:py-4 sm:px-6 rounded-lg font-medium text-sm text-[#1572D3]'>
              WHY CHOOSE US
            </h1>
            <p className='font-medium text-[#333333] text-2xl sm:text-3xl lg:text-4xl leading-snug'>
              We offer the best experience with our rental deals
            </p>
          </div>

          {/* Cards */}
          <div className='flex flex-col gap-6 w-full'>
            <OfferCard
              img='/hero2/wallet.svg'
              title='Best price guaranteed'
              description="Find a lower price? We’ll refund you 100% of the difference"
            />
            <OfferCard
              img='/hero2/user-tick.svg'
              title='Experienced driver'
              description="Don’t have a driver? Don’t worry, we have many experienced drivers for you."
            />
            <OfferCard
              img='/hero2/24-support.svg'
              title='24 hour car delivery'
              description="Book your car anytime and we will deliver it directly to you."
            />
            <OfferCard
              img='/hero2/messages-2.svg'
              title='24/7 technical support'
              description="Have a question? Contact Rentcars support any time you have a problem."
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Offer;
