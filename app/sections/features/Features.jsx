import React from 'react'
import Swiper from '@/src/components/swiper/Swiper';

const Features = () => {
  return (
    <div id="features" className="bg-black">
      <div className="container mx-auto flex flex-col items-center gap-20 py-24 px-4 xl:px-12">
        <h1 className="text-white md:text-[40px] font-light md:tracking-[6px]">WHY US?</h1>
        <div className="w-full">
          <Swiper />
        </div>
      </div>
    </div>
  );
}

export default Features