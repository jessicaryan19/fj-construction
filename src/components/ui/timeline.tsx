"use client";

import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  icon: string;
  content?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  /* Measure timeline height */
  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(contentRef.current.getBoundingClientRect().height);
  }, [data]);

  /* Scroll progress */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  /* 🔑 PERFECT SYNC ACTIVE NODE */
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
      <div ref={contentRef} className="relative mx-auto max-w-6xl">
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
            className="absolute inset-x-0 top-0 w-1.5 bg-secondary rounded-full"
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
            <div className={index % 2 === 0 ? "flex justify-end" : "opacity-0"}>
              <div className="max-w-md flex items-center transition-opacity text-primary">
                <h3 className="font-medium p-4 border-r-2 border-primary text-right">{item.title}</h3>
                <h1 className="font-medium p-4">{index + 1}</h1>
                {item.content}
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

            <div className={index % 2 === 1 ? "flex justify-start" : "opacity-0"}>
              <div className="max-w-md flex items-center transition-opacity font-medium text-primary" >
                <h1 className="font-medium p-4">{index + 1}</h1>
                <h3 className="font-medium p-4 border-l-2 border-primary">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
