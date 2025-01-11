"use client";
import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/src/assets/images/logo.png";

const Footer = () => {
  const footerDatas = [
    { text: "Home", href: "home" },
    { text: "About Us", href: "about" },
    { text: "Features", href: "features" },
    { text: "Services", href: "services" },
    { text: "Career", href: "/career" },
    { text: "Contact", href: "contact" },

    { text: "Customer Service", href: "/solutions/customer-service" },
    { text: "Sales & Marketing", href: "/solutions/sales-and-marketing" },
    {
      text: "Web & Application Dev",
      href: "/solutions/web-and-application-dev",
    },
    { text: "Social Media", href: "/solutions/social-media" },
    { text: "Advertisment", href: "/solutions/advertisment" },
    { text: "Graphic Design", href: "/solutions/graphic-design" },
    { text: "Photography", href: "/solutions/photography" },
    { text: "Recruitment", href: "/solutions/recruitment" },
  ];

  const router = useRouter();
  const pathname = usePathname();

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
  };
  return (
    <div className="bg-black pt-24 pb-6">
      <div className="container mx-auto xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10 px-4">
        <div className="flex flex-col gap-3">
          <a href="#" className="-translate-x-4 md:translate-x-0">
            <Image src={logo} alt="logo" className="w-[200px] h-[100px]" />
          </a>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://m.facebook.com/profile.php?id=61566923134686&name=xhp_nt__fb__action__open_user"
              className="shadow-xl shadow-[#ffffff15] bg-black border border-gray-900 p-4 rounded-md text-white hover:text-green-600 hover:-translate-y-2 transition duration-150 ease-linear"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/clientjoofficial/"
              className="shadow-xl shadow-[#ffffff15] bg-black border border-gray-900 p-4 rounded-md text-white hover:text-green-600 hover:-translate-y-2 transition duration-150 ease-linear"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.3-93.1-26.4-26.4-57.8-34.6-93.1-36.3-36.7-2.1-146.7-2.1-183.4 0-35.3 1.7-66.7 9.9-93.1 36.3s-34.6 57.8-36.3 93.1c-2.1 36.7-2.1 146.7 0 183.4 1.7 35.3 9.9 66.7 36.3 93.1s57.8 34.6 93.1 36.3c36.7 2.1 146.7 2.1 183.4 0 35.3-1.7 66.7-9.9 93.1-36.3 26.4-26.4 34.6-57.8 36.3-93.1 2.1-36.7 2.1-146.7 0-183.4zm-48.5 224.5c-7.8 19.7-23 35-42.7 42.7-29.5 11.7-99.5 9-132.3 9s-102.7 2.6-132.3-9c-19.7-7.8-35-23-42.7-42.7-11.7-29.5-9-99.5-9-132.3s-2.6-102.7 9-132.3c7.8-19.7 23-35 42.7-42.7 29.5-11.7 99.5-9 132.3-9s102.7-2.6 132.3 9c19.7 7.8 35 23 42.7 42.7 11.7 29.5 9 99.5 9 132.3s2.6 102.7-9 132.3z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/clientjo"
              className="shadow-xl shadow-[#ffffff15] bg-black border border-gray-900 p-4 rounded-md text-white hover:text-green-600 hover:-translate-y-2 transition duration-150 ease-linear"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-white flex flex-col gap-3">
          <h1 className="text-4xl  text-[#428D8C]">Pages</h1>
          <ul className="flex flex-col gap-2">
            {footerDatas.slice(0, 6).map((data, i) => (
              <li key={i}>
                <a
                  href={i !== 1 ? `#${data.href}` : data.href}
                  onClick={(e) => handleClick(e, data.href)}
                  className="relative text-lg hover:text-[#047474] transition duration-200 ease-linear after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#047474] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {data.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-white flex flex-col gap-3">
          <h1 className="text-4xl  text-[#428D8C]">Services</h1>
          <ul className="flex flex-col gap-2">
            {footerDatas.slice(6, 13).map((data, i) => (
              <li key={i}>
                <a
                  href={data.href}
                  className="relative text-lg hover:text-[#047474] transition duration-200 ease-linear after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#047474] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {data.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-white flex flex-col gap-3">
          <h1 className="text-4xl  text-[#428D8C]">Contact</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <p className="">
                You can contact us by filling out the information on this
                template or sending an email and we will reply back shortly
              </p>
            </li>
            <li>
              <a
                href="mailto:info@clientjo.com"
                className="font-bold underline text-lg"
              >
                info@clientjo.com
              </a>
            </li>
            <li>
              <a href="tel:+962785353089" className="font-bold underline">
                +962785353089
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
