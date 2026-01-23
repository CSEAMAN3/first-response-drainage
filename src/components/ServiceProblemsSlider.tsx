"use client";

import Image from "next/image";
import type { ProblemCard } from "./ServiceProblems";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ServiceProblemsSliderProps {
  cards: ProblemCard[];
}

export default function ServiceProblemsSlider({
  cards,
}: ServiceProblemsSliderProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const problemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const rafId = useRef<number | null>(null);

  const count = cards.length;

  const updateActiveFromScroll = () => {
    const root = scrollRef.current;
    if (!root) return;

    const left = root.scrollLeft;

    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    problemRefs.current.forEach((node, i) => {
      if (!node) return;
      const dist = Math.abs(left - node.offsetLeft);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestIndex = i;
      }
    });

    setActiveIdx((prev) => (prev === bestIndex ? prev : bestIndex));
  };

  const onScroll = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateActiveFromScroll);
  };

  const scrollToTheIndex = (index: number) => {
    const el = problemRefs.current[index];
    if (!el) return;

    // setActiveIdx(index);

    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const goPrev = () => scrollToTheIndex(Math.max(0, activeIdx - 1));
  const goNext = () => scrollToTheIndex(Math.min(count - 1, activeIdx + 1));

  useEffect(() => {
    // ✅ schedule initial sync, not synchronous setState in effect body
    rafId.current = requestAnimationFrame(updateActiveFromScroll);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const setEndPadding = () => {
      const last = problemRefs.current[count - 1];
      if (!last) return;

      // padding so the last card can align to left edge
      const padRight = Math.max(0, root.clientWidth - last.offsetWidth);
      root.style.paddingRight = `${padRight}px`;
    };

    const id = requestAnimationFrame(setEndPadding);
    window.addEventListener("resize", setEndPadding);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", setEndPadding);
    };
  }, [count]);

  return (
    <div className="relative md:hidden">
      {/* buttons */}
      <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIdx === 0}
          className="font-bold border border-fr-primary text-fr-primary px-4 py-2 rounded-sm hover:bg-fr-primary hover:text-fr-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous Service"
        >
          <IoIosArrowBack />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIdx === count - 1}
          className="font-bold border border-fr-primary text-fr-primary px-4 py-2 rounded-sm hover:bg-fr-primary hover:text-fr-white  transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Next Service"
        >
          <IoIosArrowForward />
        </button>
      </div>
      {/* scroll */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8"
      >
        {cards.map((c, i) => {
          return (
            <div
              key={c.title}
              id={`problem-${i}`}
              ref={(node) => {
                problemRefs.current[i] = node;
              }}
              className="p-4 bg-fr-light-grey border-b-4 border-fr-accent-one w-[68vw] sm:w-[55vw] min-h-70 grid place-content-center snap-start shrink-0 max-w-80"
              data-card
            >
              <Image
                src={`/images/${c.graphic}.svg`}
                alt="update this"
                width={100}
                height={100}
                className="mx-auto mb-8"
              />
              <h3 className="font-bold text-lg sm:text-xl text-fr-primary text-balance text-center max-w-[20ch]">
                {c.title}
              </h3>
            </div>
          );
        })}
      </div>
      {/* dots */}
      <div
        className="mt-4 flex justify-center gap-2"
        aria-label="Service carousel pagination"
      >
        {cards.map((c, i) => (
          <button
            key={c.title}
            type="button"
            onClick={() => scrollToTheIndex(i)}
            aria-label={`Go to ${c.title ?? "card"} (${i + 1} of ${count})`}
            aria-current={i === activeIdx ? "true" : "false"}
            className={[
              "h-3.5 w-3.5 rounded-full transition cursor-pointer border-2 border-fr-primary-dark",
              i === activeIdx ? "bg-fr-primary-dark" : "bg-fr-transparent",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
