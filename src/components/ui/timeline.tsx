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
    0: <StarCircleComboIcon className="" />,
    1: <SparkleIcon className="text-secondary rotate-10 -translate-x-8 -translate-y-8" />,
    2: (
      <div className="flex items-start opacity-50">
        <FlowerIcon className="" width={80} height={80} />
        <EightPointStarIcon className="-translate-y-10 -translate-x-4" width={60} height={60} />
      </div>
    ),
    3: (
      <div className="flex flex-col items-end">
        <FourPointFlowerIcon />
        <FourPointFlowerIcon className="translate-x-8 -translate-y-4" width={35} height={35}/>
        <FourPointFlowerIcon className="-translate-y-4" width={20} height={20} />
      </div>
    ),
    4: <StarOvalComboIcon className="" />,
    5: <StarOvalIcon className="" />,
    6: <ThreePointStarIcon className="" />,
    7: <StarCircleComboIcon className="scale-x-[-1]" />,
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
      className="relative w-full bg-white dark:bg-neutral-950 md:px-10"
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
            className="grid grid-cols-[1fr_auto_1fr] gap-10 pt-24 items-center relative"
          >
            <div className={index % 2 === 0 ? "flex" : "opacity-0"}>
              <div className="w-full flex justify-end items-center transition-opacity text-primary relative">
                {iconDecorator[index]}
                <div className="flex items-center">
                  <div className="flex flex-col gap-2 p-4 border-r-2 border-primary max-w-md">
                    <h6 className="text-right">{item.title}</h6>
                    <p className="text-right">{item.description}</p>
                  </div>
                  <h4 className="font-medium p-4" aria-hidden="true">{index + 1}</h4>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.div
                className={`z-10 flex h-12 w-12 items-center justify-center rounded-full ${activeIndex === index ? "bg-primary" : "bg-secondary"
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
                <Icon icon={item.icon} className="text-white text-xl" />
              </motion.div>
            </div>

            <div className={index % 2 === 1 ? "flex" : "opacity-0"}>
              <div className="w-full flex justify-start items-center transition-opacity text-primary relative">
                <div className="flex items-center">
                  <h4 className="font-medium p-4" aria-hidden="true">{index + 1}</h4>
                  <div className="flex flex-col gap-2 p-4 border-l-2 border-primary">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
                {iconDecorator[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};