"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import GlowDotsBackground from "@/components/ui/GlowDotsBackground";

export default function SobrePreview() {
  return (
    <AnimatedSection className="relative isolate overflow-hidden bg-[#16181A] px-6 py-20">
      <GlowDotsBackground seed={100} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/fotos/aya-18.png"
            alt="Amanda, gestora de tráfego pago da Aya"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 24rem, 40vw"
          />
        </motion.div>

        <div>
          <motion.span
            className="text-sm font-semibold uppercase tracking-widest text-[#E7664C]"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Sobre
          </motion.span>

          <AnimatedTitle
            className="mt-3 text-3xl font-bold text-[#E7664C] sm:text-4xl"
            delay={0.1}
          >
            Estratégia orientada por dados. Comunicação guiada por
            comportamento.
          </AnimatedTitle>

          <motion.p
            className="mt-6 text-[#E3D3B4]/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sou Amanda, gestora de tráfego pago nas plataformas Meta Ads e
            Google Ads e graduanda em Psicologia. Essa combinação orienta o
            trabalho da Aya. Os dados ajudam a identificar o que manter,
            ajustar ou testar. O estudo do comportamento humano contribui
            para compreender como as pessoas percebem valor, avaliam opções
            e tomam decisões. Assim, estratégia, performance e comunicação
            evoluem juntas, com mais critério para investir e mais clareza
            para falar com quem sua marca precisa atrair.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            <Button href="/sobre" variant="primary">
              Conheça minha trajetória
            </Button>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
