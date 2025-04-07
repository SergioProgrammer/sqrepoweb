"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full mt-0 bg-white dark:bg-neutral-950 font-bold md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Cómo trabajamos en SQ STUDIO
        </h2>
        <p className="text-white text-sm md:text-base max-w-sm">
         Nos gusta trabajar de forma cercana. Casi parecerá que somos tu departamento de Marketing interno.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const progressStart = index / data.length;
          const progressEnd = (index + 1) / data.length;

          const titleColor = useTransform(
            scrollYProgress,
            [progressStart, progressEnd],
            ["#6b7280", "#ffffff"]
          );

          const contentOpacity = useTransform(
            scrollYProgress,
            [progressStart, progressEnd],
            [0, 1]
          );

          const contentTranslateY = useTransform(
            scrollYProgress,
            [progressStart, progressEnd],
            [40, 0] // animación desde abajo hacia arriba
          );

          return (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
              {/* Sticky section */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <motion.h3
                  className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
                  style={{ color: titleColor }}
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Content section */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <motion.h3
                  className="md:hidden block text-2xl mb-4 text-left font-bold"
                  style={{ color: titleColor }}
                >
                  {item.title}
                </motion.h3>

                <motion.div
                  style={{
                    opacity: contentOpacity,
                    y: contentTranslateY,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          );
        })}

        {/* Animated vertical line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
