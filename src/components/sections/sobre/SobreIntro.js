"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

const paragrafos = [
  "A Aya nasceu do encontro entre o interesse pelo comportamento humano, a paixão pela comunicação e a vontade de construir estratégias coerentes com a realidade de cada negócio.",
  "Meu nome é Amanda. Sou gestora de tráfego pago, graduanda em Psicologia e fundadora da Aya.",
  "Antes das campanhas, páginas e conteúdos, uma pergunta já orientava meu olhar: o que faz uma pessoa prestar atenção, perceber valor e tomar uma decisão?",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SobreIntro() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 pb-16 pt-12 sm:pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-md lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/fotos/aya-18.png"
            alt="Amanda, fundadora da Aya"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 24rem, 40vw"
          />
        </motion.div>

        <div>
          <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46] sm:text-4xl">
            Sobre a Aya
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#202629]/70">
            Uma trajetória construída entre comportamento, comunicação e
            performance.
          </AnimatedSubtitle>

          <motion.div
            className="mt-6 space-y-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {paragrafos.map((paragrafo) => (
              <motion.p key={paragrafo} variants={item} className="text-[#202629]/80">
                {paragrafo}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
