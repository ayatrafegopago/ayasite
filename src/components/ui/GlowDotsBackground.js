"use client";

import { motion } from "framer-motion";

const glow = (duration, delay = 0) => ({
  duration,
  delay,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "mirror",
});

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// Rounded to a fixed precision so the server-rendered HTML and the
// client hydration match exactly (Math.sin can differ in the last
// float digits between Node.js and the browser's JS engine).
function round(value, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

// Terracota glow blobs drifting slowly in the background, plus a field
// of small floating dots — the same animated background used in the
// Hero. `seed` shifts the pseudo-random dot field so a second section
// reusing this component doesn't render an identical dot layout.
export default function GlowDotsBackground({ dotCount = 18, seed = 0 }) {
  const dots = Array.from({ length: dotCount }, (_, i) => ({
    top: round(5 + pseudoRandom(i * 1.7 + 1 + seed) * 90),
    left: round(5 + pseudoRandom(i * 3.1 + 7 + seed) * 90),
    size: round(2 + pseudoRandom(i * 5.3 + 13 + seed) * 4),
    opacity: round(0.2 + pseudoRandom(i * 9.7 + 37 + seed) * 0.2),
    duration: round(6 + pseudoRandom(i * 2.3 + 19 + seed) * 6),
    delay: round(pseudoRandom(i * 4.1 + 23 + seed) * 4),
    driftX: round(8 + pseudoRandom(i * 6.7 + 29 + seed) * 16),
    driftY: round(8 + pseudoRandom(i * 8.3 + 31 + seed) * 16),
  }));

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(231,102,76,0.9) 0%, rgba(231,102,76,0) 70%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={glow(11)}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(231,102,76,0.9) 0%, rgba(231,102,76,0) 70%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={glow(9, 1.5)}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#E7664C]"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
            }}
            animate={{ x: [0, dot.driftX, 0], y: [0, -dot.driftY, 0] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
}
