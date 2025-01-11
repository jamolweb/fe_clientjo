"use client";
import React, { useState, useEffect } from "react";
import logo from "@/src/assets/images/logo.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const list = [
  { name: "home", href: "home" },
  { name: "about", href: "about" },
  { name: "features", href: "features" },
  { name: "services", href: "services" },
  { name: "career", href: "/career" },
  { name: "contact", href: "contact" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {``
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu") && !event.target.closest(".bar")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.replace("/", { scroll: false });
    }
  };

  const handleClick = async (e, href) => {
    e.preventDefault();

    if (href === "/career") {
      await router.push("/career");
      return;
    }

    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
    setOpen(false);
  };

  return (
    <div
      className={`w-full transition-all duration-300 ease-linear fixed z-20  ${
        isScrolled
          ? "bg-black text-white py-0"
          : "bg-[#F9F9F9] text-black  py-2"
      }`}
    >
      <div className="container mx-auto px-1 md:px-5 flex justify-between items-center">
        <div className="-translate-x-4 md:translate-x-0">
          <a href="/">
            <Image src={logo} alt="logo" className="w-[160px] h-24" />
          </a>
        </div>
        <div className="">
          <ul
            className={`menu transition-all duration-500  ease-in-out transform uppercase ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5  sm:opacity-100 sm:translate-y-0 hidden sm:flex"
            } fixed sm:static top-[80px] left-5 right-5 bg-[#fffffff1] sm:bg-transparent shadow-md sm:shadow-none flex flex-col sm:flex-row sm:gap-6 lg:gap-8`}
          >
            {list.map((item, i) => (
              <a
                key={`${item.name}-${i}`}
                href="/"
                onClick={(e) => handleClick(e, item.href)}
                className={`text-xs font-semibold p-4 sm:p-0 hover:bg-black sm:hover:bg-transparent text-black hover:text-white  tracking-[1px] cursor-pointer transition ease-linear duration-200 border-b sm:border-none ${
                  isScrolled ? " sm:text-gray-400" : "sm:hover:text-gray-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </ul>
          <div
            className="bar text-white cursor-pointer sm:hidden menu"
            onClick={() => setOpen(!open)}
          >
            <div className="w-[22px] flex flex-col gap-1">
              <div
                className={` ${
                  open
                    ? "-rotate-45 translate-y-[3.5px] transition ease-linear duration-200"
                    : ""
                } w-full h-[3px] bg-[#808080]`}
              ></div>
              <div
                className={` ${
                  open ? "hidden" : ""
                } w-full h-[3px] bg-[#808080]`}
              ></div>
              <div
                className={` ${
                  open
                    ? "rotate-45 -translate-y-[4px] transition ease-linear duration-200"
                    : ""
                } w-full h-[3px] bg-[#808080]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
