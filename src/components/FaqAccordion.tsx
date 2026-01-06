"use client";

import { faQuestions } from "../lib/faQuestion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function FaqAccordion() {
  const pathname = usePathname();

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  const CATEGORY_BY_PATH: Record<string, string> = {
    "/": "main",
    "/blocked-drains": "blocked-drains",
    "/cctv-drainage-surveys": "cctv",
    "/high-pressure-water-jetting": "jetting",
    "/no-dig-repairs": "repairs",
    "/root-intrusion-removal": "roots",
    "/commercial-drainage": "commercial",
    "/faq": "all",
  };

  const category = CATEGORY_BY_PATH[pathname];

  const questionsToDisplay =
    !category || category === "all"
      ? faQuestions
      : faQuestions.filter((q) => q.category === category);

  return (
    <div key={pathname} className="max-w-225 mx-auto px-8 mb-12">
      {questionsToDisplay.map((question) => {
        const isOpen = openQuestion === question.id;
        const contentId = `faq-${question.id}-content`;

        return (
          <div
            key={question.id}
            className="border-b border-fr-primary pb-4 group mb-4"
          >
            <button
              onClick={() => toggleQuestion(question.id)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="text-fr-primary group-hover:text-fr-primary-dark text-balance cursor-pointer">
                {question.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-fr-primary group-hover:text-fr-primary-dark"
              >
                <FaChevronDown size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  id={contentId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden text-fr-primary-dark text-base"
                >
                  <p className="py-2">{question.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
