"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const frases = [
  "ESTRATÉGIA E EXECUÇÃO",
  "RESULTADO MENSURÁVEL",
  "CONSTRUÇÃO DE PONTA A PONTA",
  "MENOS ACHISMO, MAIS DADO",
  "IDENTIDADE E PERFORMANCE JUNTAS",
  "MENOS IMPROVISO, MAIS ESTRUTURA",
  "OTIMIZAÇÃO CONTÍNUA",
  "CRIATIVIDADE COM PROPÓSITO",
  "DIREÇÃO ESTRATÉGICA ÚNICA",
  "COMPETÊNCIA ANTES DE PROMESSA",
  "CONSTRUÇÃO SOB MEDIDA",
  "DECISÃO ORIENTADA POR DADO",
];

const SPEED = 90; // pixels per second

function Pill({ text }) {
  return (
    <span
      className={`${dmSans.className} flex shrink-0 items-center rounded-full border border-[#123B46]/50 px-6 py-2 text-sm uppercase tracking-wide text-[#202629]`}
    >
      {text}
    </span>
  );
}

export default function MarqueeValores() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    let next = x.get() - (SPEED * delta) / 1000;
    if (Math.abs(next) >= halfWidth) {
      next += halfWidth;
    }
    x.set(next);
  });

  return (
    <section className="overflow-hidden border-y border-[#123B46]/10 bg-[#FFFDFC] py-6">
      <motion.div
        ref={trackRef}
        className="flex w-max gap-4"
        style={{ x }}
        onHoverStart={() => {
          pausedRef.current = true;
        }}
        onHoverEnd={() => {
          pausedRef.current = false;
        }}
      >
        {[...frases, ...frases].map((frase, i) => (
          <Pill key={`${frase}-${i}`} text={frase} />
        ))}
      </motion.div>
    </section>
  );
}
