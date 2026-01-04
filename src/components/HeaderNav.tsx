"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { headerNav } from "../lib/navigations";

export default function HeaderNav() {
  const [toggleNav, setToggleNav] = useState(false);
  const [navWidth, setNavWidth] = useState("80vw");

  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateNavWidth = () => {
      if (innerWidth < 550) {
        setNavWidth("80vw");
      } else if (innerWidth < 650) {
        setNavWidth("60vw");
      } else if (innerWidth < 750) {
        setNavWidth("50vw");
      } else {
        setNavWidth("50vw");
      }
    };
    updateNavWidth();

    window.addEventListener("resize", updateNavWidth);
    return () => window.removeEventListener("resize", updateNavWidth);
  }, []);

  return (
    <div className="">
      {/* mobile nav */}
      <motion.div animate={toggleNav ? "open" : "close"} initial="close">
        <motion.div
          className="bg-fr-dark-blue h-screen fixed top-0 right-0 overflow-hidden z-50"
          style={{ width: "0vw" }}
          variants={{
            open: {
              width: navWidth,
              transition: {
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
                when: "beforeChildren", // wait for panel to finish, then reveal items
              },
            },
            close: {
              width: "0vw",
              transition: {
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: [0.4, 0, 0.2, 1],
                when: "afterChildren", // close after links animate out
              },
            },
          }}
        >
          {/* Nav Links */}
          <nav id="mobile-navigation" className="mt-32">
            {/* UL controls the stagger timing for children */}
            <motion.ul
              className="px-8 grid gap-6"
              variants={{
                open: {
                  transition: {
                    delayChildren: 0, //slight pause after panel opens
                    staggerChildren: shouldReduceMotion ? 0 : 0.12, // each link one after the other
                  },
                },
                close: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.01,
                    staggerDirection: shouldReduceMotion ? 0 : -1, //reverse order on close
                  },
                },
              }}
            >
              {headerNav.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: shouldReduceMotion ? 0 : 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                      close: {
                        opacity: 0,
                        y: 10,
                        filter: "blur(6px)",
                        transition: {
                          duration: shouldReduceMotion ? 0 : 0.2,
                          ease: [0.4, 0, 0.2, 1],
                        },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`font-bold text-xl ${
                        isActive ? "text-fr-light-blue" : "text-fr-white"
                      } hover:text-fr-light-blue transition-colors duration-150`}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <motion.p
            className="text-fr-white font-bold text-xl absolute bottom-24 left-8"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.32,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
              close: {
                opacity: 0,
                y: 10,
                filter: "blur(6px)",
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.2,
                  ease: [0.4, 0, 0.2, 1],
                },
              },
            }}
          >
            Need Drainage Help Today?{" "}
            <span className="block text-fr-light-blue">
              We&#39;re Ready to Respond
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
      {/* nav bars */}
      <motion.button
        className={`w-8 h-8 ${
          toggleNav ? "fixed" : "absolute"
        } top-8 right-8 cursor-pointer lg:hidden group z-50`}
        onClick={() => setToggleNav(!toggleNav)}
        initial={false}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={toggleNav}
        aria-controls="mobile-navigation"
        animate={toggleNav ? "open" : "close"}
      >
        {/* top bar */}
        <motion.div
          className={`w-full h-1.5 ${
            toggleNav ? "bg-fr-white" : "bg-fr-dark-blue"
          } group-hover:bg-fr-red transition-colors duration-150 absolute`}
          style={{
            top: "0%",
            y: "0%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              top: ["0%", "50%", "50%"],
              y: ["0%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            close: {
              top: ["50%", "50%", "0%"],
              y: ["-50%", "-50%", "0%"],
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        {/* middle bar */}
        <motion.div
          className={`w-full h-1.5 ${
            toggleNav ? "bg-fr-white" : "bg-fr-dark-blue"
          } group-hover:bg-fr-red transition-colors duration-150 absolute`}
          style={{
            top: "50%",
            y: "-50%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        {/* bottom bar */}
        <motion.div
          className={`w-full h-1.5 ${
            toggleNav ? "bg-fr-white" : "bg-fr-dark-blue"
          } group-hover:bg-fr-red transition-colors duration-150 absolute`}
          style={{
            top: "100%",
            y: "-100%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              top: ["100%", "50%", "50%"],
              y: ["-100%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              top: ["50%", "50%", "100%"],
              y: ["-50%", "-50%", "-100%"],
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
      </motion.button>
      {/* desktop nav */}
    </div>
  );
}
