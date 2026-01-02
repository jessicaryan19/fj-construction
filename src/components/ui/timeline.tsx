"use client";

import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import StarCircleComboIcon from "../icons/star-circle-combo-icon";
import SparkleIcon from "../icons/sparkle-icon";
import FlowerIcon from "../icons/flower-icon";
import StarOvalComboIcon from "../icons/star-oval-combo-icon";
import StarOvalIcon from "../icons/star-oval-icon";
import ThreePointStarIcon from "../icons/three-point-star-icon";
import FourPointFlowerIcon from "../icons/four-point-flower-icon";
import EightPointStarIcon from "../icons/eight-point-star-icon";

interface TimelineEntry {
  title: string;
  icon: string;
  description?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {

  const iconDecorator: Record<number, ReactNode> = {
    0: <StarCircleComboIcon className="hidden lg:block" />,
    1: <SparkleIcon className="text-secondary rotate-10 -translate-x-4 lg:-translate-x-8 -translate-y-4 lg:-translate-y-8 hidden md:block" />,
    2: (
      <div className="hidden lg:flex items-start opacity-50">
        <FlowerIcon className="" width={80} height={80} />
        <EightPointStarIcon className="-translate-y-10 -translate-x-4" width={60} height={60} />
      </div>
    ),
    3: (
      <div className="hidden lg:flex flex-col items-end">
        <FourPointFlowerIcon />
        <FourPointFlowerIcon className="translate-x-8 -translate-y-4" width={35} height={35} />
        <FourPointFlowerIcon className="-translate-y-4" width={20} height={20} />
      </div>
    ),
    4: <StarOvalComboIcon className="hidden lg:block" />,
    5: <StarOvalIcon className="hidden lg:block" />,
    6: <ThreePointStarIcon className="hidden lg:block" />,
    7: <StarCircleComboIcon className="scale-x-[-1] hidden lg:block" />,
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(contentRef.current.getBoundingClientRect().height);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const unsubscribe = heightTransform.on("change", (h) => {
      let current: number | undefined = undefined;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;

        const nodeCenter =
          el.offsetTop + el.offsetHeight / 2;

        if (h >= nodeCenter) {
          current = idx;
        }
      });

      setActiveIndex(current);
    });

    return () => unsubscribe();
  }, [heightTransform]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white dark:bg-neutral-950 px-4 sm:px-6 md:px-10"
    >
      <div ref={contentRef} className="relative">
        <div
          style={{ height }}
          className="
            absolute left-1/2 top-0 -translate-x-1/2
            w-1.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-secondary rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 md:gap-6 lg:gap-10 pt-8 sm:pt-12 md:pt-16 lg:pt-24 relative"
          >
            {/* Left side - even indices */}
            <div className={index % 2 === 0 ? "flex" : "opacity-0"}>
              <div className="w-full flex justify-end transition-opacity text-primary relative">
                <div className="hidden lg:block self-center">
                  {iconDecorator[index]}
                </div>
                <div className="grid grid-cols-[1fr_auto] items-start">
                  <div className="flex flex-col gap-1 sm:gap-2 p-2 sm:p-3 md:p-4 border-r-2 border-primary max-w-xs sm:max-w-sm md:max-w-md">
                    <h6 className="text-right">{item.title}</h6>
                    <p className="text-right text-xs sm:text-sm md:text-base">{item.description}</p>
                  </div>
                  <h4 className="font-medium p-2 sm:p-3 md:p-4 self-center" aria-hidden="true">{index + 1}</h4>
                </div>
              </div>
            </div>

            {/* Center dot */}
            <div className="flex justify-center items-start">
              <div className="h-full flex items-center">
                <motion.div
                  className={`z-10 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full ${activeIndex !== undefined && index <= activeIndex ? "bg-primary" : "bg-secondary"
                    }`}
                  animate={
                    activeIndex === index
                      ? {
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(0,0,0,0)",
                          "0 0 0 12px rgba(0,0,0,0.08)",
                          "0 0 0 0 rgba(0,0,0,0)",
                        ],
                      }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: activeIndex === index ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <Icon icon={item.icon} className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
                </motion.div>
              </div>
            </div>

            {/* Right side - odd indices */}
            <div className={index % 2 === 1 ? "flex" : "opacity-0"}>
              <div className="w-full flex justify-start transition-opacity text-primary relative">
                <div className="grid grid-cols-[auto_1fr] items-center">
                  <h4 className="font-medium p-2 sm:p-3 md:p-4 self-center" aria-hidden="true">{index + 1}</h4>
                  <div className="flex flex-col gap-1 sm:gap-2 p-2 sm:p-3 md:p-4 border-l-2 border-primary max-w-xs sm:max-w-sm md:max-w-md">
                    <h6>{item.title}</h6>
                    <p className="text-xs sm:text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
                <div className="hidden lg:block self-center">
                  {iconDecorator[index]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};