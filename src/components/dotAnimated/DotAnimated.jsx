'use client'
import React, { useEffect, useRef } from "react";
const DotAnimated = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let position = 0;
    let isMoving = true;

    const animate = () => {
      if (isMoving) {
        position += 2;

        if (position > 65) {
          isMoving = false;
          dot.style.transition = "opacity 1s ease-out";
          dot.style.opacity = "0";

          setTimeout(() => {
            position = 0;
            dot.style.transition = "none";
            dot.style.opacity = "0";
            dot.style.top = "0%";

            setTimeout(() => {
              isMoving = true;
              dot.style.transition = "opacity 1s";
              dot.style.opacity = "1";
            }, 100);
          }, 2000);
        }

        dot.style.top = `${position}%`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-[35px] h-[55px] bg-transparent border border-[#428D8C] rounded-full relative overflow-hidden">
      <div
        ref={dotRef}
        className="w-[8px] h-[8px] bg-[#428D8C] rounded-full absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-500"
      ></div>
    </div>
  );
};

export default DotAnimated;