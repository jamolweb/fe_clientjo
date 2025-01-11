"use client";
import React, { useRef } from "react";
import bgImg from "@/src/assets/images/laptopbg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Laptop = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1]); // Increased initial scale

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen relative overflow-hidden"
      id="career"
    >
      {/* Background container with increased size */}
      <div className="absolute inset-0 w-full h-[110%] -top-[30%]">
        {" "}
        {/* Increased height and negative top */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: backgroundY,
            scale: backgroundScale,
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 opacity-40" />

      {/* Content Container */}
      <div className="container mx-auto px-4 xl:px-16 text-gray-500 relative z-10 py-16 md:py-24">
        {/* Centered Headings Container */}
        <div className="w-full lg:w-2/3 text-center mb-8">
          <h3
            className="sm:text-[13px] tracking-wide md:tracking-[0.5em] mb-10 mt-10"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            We are always seeking talented and bright individuals to join our
            team of diverse innovators.
            <br />
            At ClientJo, you will continuously learn, grow, tackle new
            challenges and develop everlasting connections.
          </h3>

          <h2 className="text-gray-500 md:text-[40px] font-light md:tracking-[6px]">
            Start making changes with us and apply now.
          </h2>
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-2/3 text-center">
          <div className="w-full flex flex-col justify-center row-gap-4">
            <div className="mt-4 sm:mt-6 flex  justify-center mb-2">
              <Link
                href="/career"
                className="w-full sm:w-auto min-w-[200px] text-sm font-semibold tracking-widest uppercase
              border border-gray-500 bg-transparent hover:bg-gray-500 hover:text-white
              transition duration-300 ease-linear p-3 sm:p-4 text-center"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laptop;
