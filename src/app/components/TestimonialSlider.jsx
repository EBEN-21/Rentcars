'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Charlie Johnson',
    address: 'New York, US',
    image: '/testimonial/person.svg',
    text: '“I feel very secure when using Rentcars services. Your customer care team is very enthusiastic and the driver is always on time.”',
    rating: 5,
  },
  {
    name: 'Charlie Johnson',
    address: 'New York, US',
    image: '/testimonial/person.svg',
    text: '“I feel very secure when using Rentcars services. Your customer care team is very enthusiastic and the driver is always on time.”',
    rating: 5,
  },
  // Add m
  {
    name: 'Charlie Johnson',
    address: 'New York, US',
    image: '/testimonial/person.svg',
    text: '“I feel very secure when using Rentcars services. Your customer care team is very enthusiastic and the driver is always on time.”',
    rating: 5,
  },
  {
    name: 'Charlie Johnson',
    address: 'New York, US',
    image: '/testimonial/person.svg',
    text: '“I feel very secure when using Rentcars services. Your customer care team is very enthusiastic and the driver is always on time.”',
    rating: 5,
  },
  // Add m
  {
    name: 'Charlie Johnson',
    address: 'New York, US',
    image: '/testimonial/person.svg',
    text: '“I feel very secure when using Rentcars services. Your customer care team is very enthusiastic and the driver is always on time.”',
    rating: 5,
  },
  // Add m
  // Add m
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <div className="w-full flex justify-center py-12 px-4 sm:px- ">
      
      <Swiper
         modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView="auto" // Important to allow custom width
        autoplay={{ delay: 5000 }}
        loop
        centeredSlides
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="!w-full sm:!w-[540px] md:!w-[670px] flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:pl-0 md:py-0 flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-[220px] md:h-[370px] lg:h-auto "
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold">{testimonial.rating}.0 <span className="text-gray-500 text-sm">stars</span></h3>
                  <span className="text-yellow-500 text-lg">★ ★ ★ ★ ★</span>
                  
                </div>
                <p className="text-gray-700 my-2 md:my-7 text-base">{testimonial.text}</p>
                <div>
                  <h4 className="font-medium text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.address}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
