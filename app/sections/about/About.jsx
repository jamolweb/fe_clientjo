import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/images/logo.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-1 py-[100px] text-center container mx-auto"
    >
      <div className="flex justify-center">
        <Link href="/about-us">
          <Image
            src={logo}
            alt="logo"
            className="w-[200px] h-[100px] filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out mix-blend-multiply hover:drop-shadow-[0px_2px_8px_#0000008e]"
            style={{
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />
        </Link>
      </div>
      <h1 className="text-[24px] md:text-[40px] font-light md:tracking-[6px]">
        ABOUT US
      </h1>
      <p className="md:w-[60%] mx-auto pt-6 text-[#595959]">
        ClientJo is a leading provider of outsourcing services, offering
        expertise in customer service, marketing, social media management, web
        and application development, sales, advertising, photography, graphic
        design, and recruitment. Our solutions are designed to enhance business
        efficiency and support sustainable growth.
      </p>
    </div>
  );
};

export default About;
