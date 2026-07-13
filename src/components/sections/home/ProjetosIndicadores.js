"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

const projetos = [
  { src: "/fotos/aya-7.png", alt: "Mockup de feed do Instagram para restaurante" },
  { src: "/fotos/aya-8.png", alt: "Mockup de feed do Instagram para loja de produtos naturais" },
  { src: "/fotos/aya-9.png", alt: "Mockup de feed do Instagram para escritório de advocacia" },
  { src: "/fotos/aya-10.png", alt: "Mockup de feed do Instagram para nutricionista" },
  { src: "/fotos/aya-11.png", alt: "Mockup de feed do Instagram para psicólogo" },
];

const indicadores = [
  { src: "/fotos/aya-12.png", alt: "Mockup de painel de campanhas do Meta Ads" },
  { src: "/fotos/aya-13.png", alt: "Mockup de gráficos de ROI, CPA e origem de tráfego" },
];

const SPEED = 60; // pixels per second

function ProjetoCard({ src, alt }) {
  return (
    <div className="relative aspect-[4/5] w-56 shrink-0 overflow-hidden rounded-2xl shadow-md sm:w-64">
      <Image src={src} alt={alt} fill className="object-cover" sizes="16rem" />
    </div>
  );
}

function LegendaCurta({ children }) {
  return (
    <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#E7664C]">
      {children}
    </p>
  );
}

export default function ProjetosIndicadores() {
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
    <AnimatedSection className="bg-[#FFFDFC] py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
          Estratégias pensadas pra cada tipo de negócio.
        </AnimatedTitle>
        <AnimatedSubtitle className="mt-4 text-[#202629]/70">
          Como a identidade visual e o conteúdo se conectam à estratégia de
          cada segmento.
        </AnimatedSubtitle>
      </div>

      <div className="mt-12 overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex w-max gap-6 px-6"
          style={{ x }}
          onHoverStart={() => {
            pausedRef.current = true;
          }}
          onHoverEnd={() => {
            pausedRef.current = false;
          }}
        >
          {[...projetos, ...projetos].map((projeto, i) => (
            <ProjetoCard key={`${projeto.src}-${i}`} src={projeto.src} alt={projeto.alt} />
          ))}
        </motion.div>
      </div>

      <div className="mt-4 px-6">
        <LegendaCurta>Identidade e conteúdo aplicados à estratégia</LegendaCurta>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-2">
        {indicadores.map((indicador, i) => (
          <motion.div
            key={indicador.src}
            className="relative aspect-video overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          >
            <Image
              src={indicador.src}
              alt={indicador.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 90vw, 32rem"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-4 px-6">
        <LegendaCurta>Acompanhamento de performance</LegendaCurta>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm italic text-[#202629]/50">
          Cada campanha é acompanhada de perto, com dados organizados para
          mostrar o que está funcionando e onde ajustar — assim você sabe
          exatamente para onde o investimento está indo, e por quê.
        </p>
      </div>
    </AnimatedSection>
  );
}
