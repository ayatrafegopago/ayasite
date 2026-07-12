"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { League_Gothic, DM_Sans } from "next/font/google";
import Button from "@/components/ui/Button";
import GlowDotsBackground from "@/components/ui/GlowDotsBackground";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const HEADLINE_LINES = [
  "Mais clareza para sua marca.",
  "Mais direção para seu marketing.",
  "Mais oportunidades para o negócio.",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#16181A] py-32">
      <GlowDotsBackground />

      <motion.div
        className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center lg:text-left">
          <h1
            className={`${leagueGothic.className} text-4xl uppercase leading-tight tracking-wide text-[#FFFDFC] sm:text-5xl lg:text-3xl xl:text-4xl`}
          >
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={line}
                className="block lg:whitespace-nowrap"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className={`${dmSans.className} mt-6 text-base text-[#E3D3B4]/80 sm:text-lg`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            Integramos tráfego pago, identidade visual, copy e conteúdo para
            atrair o público certo, aumentar a percepção de valor e
            transformar atenção em oportunidades de venda.
          </motion.p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Button href="/diagnostico" variant="primary" className="uppercase tracking-wide">
              Converse com Nossa Equipe
            </Button>
          </div>
        </div>

        <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96 lg:mx-0 lg:h-[30rem] lg:w-full">
          <Image
            src="/logo/logo-aya-transparente-2.png"
            alt="Aya Tráfego Pago"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 24rem, 40vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
