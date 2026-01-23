"use client";

import { FaChevronUp } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-30 font-semibold hover:bg-fr-accent-two bottom-10 right-5 p-4 rounded-full bg-fr-accent-one text-fr-white shadow-lg transition-opacity duration-300 border-2 border-fr-primary-dark cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <FaChevronUp size={24} />
    </button>
  );
}
