"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperData } from "./SwiperData";

const SwiperComponent = () => {
   return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      grabCursor={true}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {SwiperData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="text-center text-white flex flex-col items-center gap-4 w-[90%] mx-auto p-4 ">
            <Image
              src={data.icon}
              alt={data.text}
              width={48}
              height={48}
              className="m-auto transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h2 className="text-xl font-semibold">{data.text}</h2>
            <p className="text-gray-300 text-sm">{data.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
