"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { services } from "@/lib/services";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function ServicesCards() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const count = services.length;

  const scrollToIndex = (index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;

    setActiveIndex(index);

    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (!visible?.target) return;

        const idx = cardRefs.current.findIndex((n) => n === visible.target);
        if (idx !== -1) setActiveIndex(idx);
      },
      {
        root,
        threshold: 0.6,
        rootMargin: "0px -40% 0px -40%", // ✅ biases to center-ish
      },
    );

    cardRefs.current.forEach((node) => node && observer.observe(node));

    return () => observer.disconnect();
  }, [count]);

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
          className="font-bold border border-fr-primary text-fr-primary px-4 py-2 rounded-sm hover:bg-fr-primary hover:text-fr-white  transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous Service"
        >
          <IoIosArrowForward />
        </button>
      </div>
      {/* scroller */}
      <div
        ref={scrollerRef}
        className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
      >
        {services.map((s, i) => {
          return (
            <div
              key={s.slug}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className="snap-start shrink-0 w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96 bg-fr-light-grey rounded-sm overflow-hidden relative group"
              data-card
            >
              <Link href={`/drainage-services/${s.slug}`}>
                <div className="w-full h-50 overflow-hidden">
                  <Image
                    src="/images/test.jpg"
                    alt="update this"
                    width={300}
                    height={300}
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
          );
        })}
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
            aria-label={`Go to ${s.service ?? "service"} (${i + 1} of ${count})`}
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
