"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { services } from "@/lib/services";

import CloudinaryUnOptImage from "./CloudinaryUnOptImage";
import { firstResponseImages as Images } from "@/lib/firstResponseImages";

export default function ServicesCards() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafId = useRef<number | null>(null);

  const count = services.length;

  const updateActiveFromScroll = () => {
    const root = scrollerRef.current;
    if (!root) return;

    const left = root.scrollLeft;

    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((node, i) => {
      if (!node) return;
      const dist = Math.abs(left - node.offsetLeft);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestIndex = i;
      }
    });

    setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
  };

  const onScroll = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateActiveFromScroll);
  };

  const scrollToIndex = (index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

  useEffect(() => {
    // ✅ schedule initial sync, not synchronous setState in effect body
    rafId.current = requestAnimationFrame(updateActiveFromScroll);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const setEndPadding = () => {
      const first = cardRefs.current[0];
      if (!first) return;

      // padding so the last card can align to left edge
      const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
      root.style.paddingRight = `${padRight}px`;
    };

    const id = requestAnimationFrame(setEndPadding);
    window.addEventListener("resize", setEndPadding);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", setEndPadding);
    };
  }, []);

  return (
    <div className="relative">
      {/* buttons */}
      <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="font-bold border border-fr-primary text-fr-primary px-4 py-2 rounded-sm hover:bg-fr-primary hover:text-fr-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous Service"
        >
          <IoIosArrowBack />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex === count - 1}
          className="font-bold border border-fr-primary text-fr-primary px-4 py-2 rounded-sm hover:bg-fr-primary hover:text-fr-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Next Service"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* scroller */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] scrollbar-none mb-8 md:mb-12"
      >
        {services.map((s, i) => (
          <div
            key={s.slug}
            ref={(node) => {
              cardRefs.current[i] = node;
            }}
            className="snap-start shrink-0 w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96 bg-fr-primary/5 rounded-sm overflow-hidden relative group"
          >
            <Link href={`/drainage-services/${s.slug}`}>
              <div className="w-full h-50 overflow-hidden">
                {/* <Image
                  src="/images/test.jpg"
                  alt="update this"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                /> */}
                <CloudinaryUnOptImage
                  {...Images[s.carousel.photo]}
                  alt={s.hero.photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
              </div>

              <div className="px-4 pt-8 pb-32 relative">
                <h3 className="font-bold text-lg text-fr-primary mb-4">
                  {s.service}
                </h3>
                <p className="mb-8">{s.carousel.paragraph}</p>

                <div className="absolute top-48">
                  <p className="font-bold text-fr-accent-one text-sm">
                    {s.carousel.price}
                  </p>
                  <p className="text-xs">{s.carousel.terms}</p>
                </div>
              </div>

              <div className="absolute bottom-0 bg-fr-primary w-full p-4 group-hover:bg-fr-accent-one transition duration-300">
                <p className="text-center text-fr-white font-bold">
                  Learn More
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* dots */}
      <div
        className="mt-4 flex justify-center gap-2"
        aria-label="Service carousel pagination"
      >
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${s.service} (${i + 1} of ${count})`}
            aria-current={i === activeIndex ? "true" : "false"}
            className={[
              "h-3.5 w-3.5 rounded-full transition cursor-pointer border-2 border-fr-primary-dark",
              i === activeIndex ? "bg-fr-primary-dark" : "bg-fr-transparent",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
