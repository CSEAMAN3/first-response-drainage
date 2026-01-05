"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuPhoneCall, LuClock, LuBadgeCheck, LuDrill } from "react-icons/lu";

type IconKey = "badge" | "building" | "clock" | "phone";

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  badge: LuBadgeCheck,
  building: LuDrill,
  clock: LuClock,
  phone: LuPhoneCall,
};

interface ScrollItem {
  label: string;
  iconKey?: IconKey;
}

interface ScrollbarProps {
  items: readonly ScrollItem[];
  intervalMs?: number;
  className?: string;
}

export default function Scrollbar({
  items,
  intervalMs = 2600,
  className = "",
}: ScrollbarProps) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const canAnimate = items.length > 1 && !shouldReduceMotion;

  useEffect(() => {
    if (!canAnimate) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [canAnimate, intervalMs, items.length]);

  const current = items[index];
  const CurrentIcon = current?.iconKey ? ICONS[current.iconKey] : null;

  return (
    <div className={className}>
      <div className="md:hidden overflow-hidden">
        <div className="relative h-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current?.label}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center gap-2"
            >
              {CurrentIcon && <CurrentIcon className="w-4 h-4 text-fr-white" />}
              <span className="text-sm font-bold text-fr-white/90">
                {current?.label}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16 xl:gap-24">
        {items.map(({ label, iconKey }) => {
          const Icon = iconKey ? ICONS[iconKey] : null;
          return (
            <div
              key={label}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              {Icon && <Icon className="w-4 h-4 text-fr-white" />}
              <span className="text-sm font-bold text-white/90">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
