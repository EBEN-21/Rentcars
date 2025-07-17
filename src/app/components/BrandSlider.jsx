"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/brands/acura.svg",
  "/brands/kia.svg",
  "/brands/ford.svg",
  "/brands/toyota.svg",
  "/brands/tesla.svg",
  "/brands/rover.svg",
  "/brands/subaru.svg",
  "/brands/volks.svg",
  "/brands/bmw.svg",
  "/brands/chevy.svg",
];

const BrandSlider = () => {
  return (
    <div className="w-full px-6 mt-24">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2400 }}
        slidesPerView={5}
        spaceBetween={14}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
            <img
              src={logo}
              alt="Brand"
              className="max-w-[60px] w-full grayscale hover:grayscale-0 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
