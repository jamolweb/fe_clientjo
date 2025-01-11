import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkData } from "./WorkData";

const Work = () => {
  return (
    <div id="services" className="w-full">
      <div className="container mx-auto py-14">
        <div className="flex flex-col gap-5 items-center text-center pb-[60px]">
          <h1 className="text-[18px] xs:text-[24px] sm:text-[40px] font-light tracking-[3px] xs:tracking-[6px]">
            SERVICES
          </h1>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {WorkData.map((project) => (
            <Link
              key={project.id}
              href={"solutions/" + project.link}
              className="relative group overflow-hidden cursor-pointer aspect-square"
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="relative z-10  object-cover group-hover:-translate-y-full transition duration-500 ease-in-out"
              />
              <div className="absolute z-0 inset-0 bg-black  ">
                <div className="p-4 text-white flex flex-col gap-4 h-full">
                  <h2 className="text-xl font-semibold capitalize">
                    {project.title}
                  </h2>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
