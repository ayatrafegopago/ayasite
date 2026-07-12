"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}

// Standard entrance for every section title: fades in from above.
export function AnimatedTitle({
  as = "h2",
  className = "",
  children,
  delay = 0,
  viewportAmount = 0.4,
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: viewportAmount }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

// Standard entrance for every section subtitle: fades in from the
// right, slightly after the title (default delay sits in the
// 0.15-0.2s range documented in CLAUDE.md).
export function AnimatedSubtitle({
  as = "p",
  className = "",
  children,
  delay = 0.18,
  viewportAmount = 0.4,
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: viewportAmount }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
