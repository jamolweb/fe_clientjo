"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import DotAnimated from "@/src/components/dotAnimated/DotAnimated";
import paperClip from "@/src/assets/images/header_paperclip.png";
import book from "@/src/assets/images/book.png";
import oculos from "@/src/assets/images/oculos.png";
import pen from "@/src/assets/images/header_pen.png";
import tablet from "@/src/assets/images/header_tablet.png";

const HomeSection = () => {
  const words = [
    "Customer Service",
    "Graphic Design",
    "Recruitment",
    "Web & Application Development",
    "Advertisement",
    "Customer Service (Calls & Chat)",
    "Photography",
    "Social Media",
    "ClientJO",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showClientJo, setShowClientJo] = useState(true);
  const [clientJoText, setClientJoText] = useState("ClientJo");
  const [startTyping, setStartTyping] = useState(false);

  // Scroll hooks
  const { scrollY } = useScroll();

  // Transform values for different elements
  const paperClipY = useTransform(scrollY, [0, 500], [0, -100]);
  const bookY = useTransform(scrollY, [0, 500], [0, -150]);
  const oculosY = useTransform(scrollY, [0, 500], [0, -200]);
  const penY = useTransform(scrollY, [0, 500], [0, -180]);
  const tabletY = useTransform(scrollY, [0, 500], [0, -120]);

  useEffect(() => {
    if (showClientJo) {
      // Wait for 1.6 seconds before starting to delete ClientJo
      const startDeletingTimer = setTimeout(() => {
        const deleteInterval = setInterval(() => {
          setClientJoText((prev) => {
            if (prev.length <= 1) {
              clearInterval(deleteInterval);
              setShowClientJo(false);
              setStartTyping(true); // Start the typing animation
              return "";
            }
            return prev.slice(0, -1);
          });
        }, 50); // Speed of deletion
      }, 1600);

      return () => clearTimeout(startDeletingTimer);
    }
  }, [showClientJo]);

  useEffect(() => {
    if (!startTyping) return;

    let interval;
    let timeout;
    const currentWord = words[currentWordIndex] || "";

    if (!deleting && charIndex < currentWord.length) {
      interval = setInterval(() => {
        setDisplayedWord((prev) => {
          const nextChar = currentWord[charIndex];
          return nextChar ? prev + nextChar : prev;
        });
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 2000);
    } else if (deleting && charIndex > 0) {
      interval = setInterval(() => {
        setDisplayedWord((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [charIndex, currentWordIndex, deleting, words, startTyping]);
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="home"
      className="bg-[#F9F9F9] h-[calc(100vh-4rem)] w-full relative overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-8 -top-36">
        <motion.div
          initial={{ y: -70, opacity: 0, scale: 3.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <h1 className="uppercase text-center break-words px-1 text-xl md:text-[40px] font-light tracking-[4px] min-h-[30px]">
            {showClientJo ? clientJoText : displayedWord}
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase text-[12px] text-[#428D8C] font-light tracking-[3px] text-center">
            Your Partner for Success
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute left-5 bottom-[120px] xs:left-9 xs:bottom-[260px]"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 180 }}
        transition={{ duration: 1 }}
        style={{ y: paperClipY }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="w-[30px] h-[53px] xs:w-[50px] xs:h-[73px] rotate-[120deg]"
          src={paperClip}
          alt="paperClip"
        />
      </motion.div>

      <motion.div
        className="absolute left-12 bottom-[100px] xs:left-16 xs:bottom-[220px]"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y: paperClipY }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="w-[30px] h-[53px] xs:w-[50px] xs:h-[73px]"
          src={paperClip}
          alt="paperClip"
        />
      </motion.div>

      <motion.div
        className="absolute -left-[130px] -bottom-[120px] xs:-left-[140px] xs:-bottom-[80px] sm:left-[10px] sm:-bottom-[80px]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        style={{ y: bookY }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          className="w-[200px] h-[249px] xs:w-[274px] xs:h-[319px]"
          src={book}
          alt="book"
        />
      </motion.div>

      <motion.div
        className="absolute -left-[40px] xs:-left-[50px] bottom-[0px] sm:left-[140px] sm:bottom-[40px]"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 90 }}
        transition={{ duration: 1.0, delay: 0.5 }}
        style={{ y: oculosY }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="w-[134px] h-[100px] xs:w-[219px] xs:h-[185px] -rotate-90"
          src={oculos}
          alt="oculos"
        />
      </motion.div>

      <motion.div
        className="absolute right-[15px] -bottom-[5px] xs:right-[35px] xs:bottom-[20px] sm:right-[170px] sm:bottom-[40px]"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: -45 }}
        transition={{ duration: 1.0, delay: 0.5 }}
        style={{ y: penY }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="w-[150px] h-[280px] xs:w-[190px] xs:h-[320px] sm:w-[221px] sm:h-[368px] rotate-45"
          src={pen}
          alt="pen"
        />
      </motion.div>

      <motion.div
        className="absolute -right-[300px] -bottom-[110px] xs:-right-[390px] xs:-bottom-[160px] sm:-right-[250px] sm:-bottom-[110px]"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 45 }}
        transition={{ duration: 1.0, delay: 0.5 }}
        style={{ y: tabletY }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          className="w-[400px] h-[275px] xs:w-[538px] xs:h-[383px] -rotate-45"
          src={tablet}
          alt="tablet"
        />
      </motion.div>

      <motion.div
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-0 w-full flex justify-center items-center h-full pt-20"
      >
        <a
          href="/#about"
          onClick={(e) => handleClick(e, "about")}
          className="outline-none"
        >
          <DotAnimated />
        </a>
      </motion.div>
    </div>
  );
};

export default HomeSection;
