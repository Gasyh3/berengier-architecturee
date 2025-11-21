"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const images = [
  {
    src: "/assets/3D/14ce0d00-514b-4e02-988d-92754cbed77b.png"
  },
  {
    src: "/assets/3D/ChatGPT%20Image%2027%20juil.%202025%2C%2012_57_08.png"
  },
  {
    src: "/assets/3D/ChatGPT%20Image%2027%20juil.%202025%2C%2013_04_18.png"
  },
  {
    src: "/assets/3D/ChatGPT%20Image%2027%20juil.%202025%2C%2014_46_28.png"
  },
  {
    src: "/assets/3D/ChatGPT%20Image%2027%20juil.%202025%2C%2015_13_38.png"
  },
  {
    src: "/assets/3D/ChatGPT%20Image%2027%20juil.%202025%2C%2015_15_10.png"
  },
  {
    src: "/assets/3D/Lot%203%20salon.png"
  },
  {
    src: "/assets/3D/Rendu%201.png"
  },
  {
    src: "/assets/3D/Rendu%202.png"
  },
  {
    src: "/assets/3D/Vue%20globale.png"
  }
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateActiveFromScroll = useCallback(() => {
    if (!containerRef.current) return;
    const center =
      containerRef.current.getBoundingClientRect().left +
      containerRef.current.clientWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActive(closestIndex);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handle = () => updateActiveFromScroll();
    updateActiveFromScroll();
    container.addEventListener("scroll", handle, { passive: true });
    return () => container.removeEventListener("scroll", handle);
  }, [updateActiveFromScroll]);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRefs.current[0];
    if (!container || !card) return;
    const offset =
      card.offsetLeft -
      container.clientWidth / 2 +
      card.clientWidth / 2;
    container.scrollLeft = offset;
    updateActiveFromScroll();
  }, [updateActiveFromScroll]);

  const getClasses = (index: number) => {
    if (index === active) {
      return "z-30 scale-105 opacity-100 blur-0 saturate-100 brightness-100 shadow-2xl";
    }

    const leftNeighbor = (active - 1 + images.length) % images.length;
    const rightNeighbor = (active + 1) % images.length;

    if (index === leftNeighbor || index === rightNeighbor) {
      return "z-20 scale-95 opacity-40 blur-sm saturate-0 brightness-125 backdrop-brightness-200";
    }

    return "pointer-events-none opacity-0 blur-sm md:opacity-0";
  };


  return (
    <div className="w-full rounded-[40px] bg-white px-0 py-12 sm:px-4">
      <div
        ref={containerRef}
        className="mx-auto flex w-full max-w-6xl gap-6 overflow-x-auto px-4 py-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`relative min-w-[min(720px,85vw)] max-w-[90vw] scroll-mx-6 rounded-[36px] border border-slate-200 bg-slate-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] sm:min-w-[min(620px,70vw)] md:min-w-[55%] ${getClasses(
              index
            )}`}
            style={{
              height: "min(60vh, 520px)",
              scrollSnapAlign: "center"
            }}
          >
            <Image
              src={image.src}
              alt={"Carousel image " + (index + 1)}
              fill
              className={`rounded-[36px] object-cover transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${index === active ? "scale-100" : "scale-95"
                }`}
              sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
              priority={index === active}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
