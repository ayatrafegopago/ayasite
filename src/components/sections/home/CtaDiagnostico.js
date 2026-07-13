"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import GlowDotsBackground from "@/components/ui/GlowDotsBackground";

export default function CtaDiagnostico() {
  return (
    <AnimatedSection className="relative isolate overflow-hidden bg-[#16181A] px-6 py-28 sm:py-36">
      <GlowDotsBackground seed={220} />

      <div className="relative mx-auto max-w-2xl text-center">
        <AnimatedTitle className="text-3xl font-bold text-[#FFFDFC] sm:text-4xl lg:text-5xl">
          Veja onde seu marketing está perdendo oportunidades.
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-6 max-w-xl text-[#E3D3B4]">
          Em uma conversa inicial, a Aya analisa os pontos que dificultam a
          chegada de novos clientes e aponta as prioridades que merecem
          atenção primeiro.
        </AnimatedSubtitle>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Button href="/diagnostico" variant="primary" size="lg" className="uppercase tracking-wide">
            Agendar diagnóstico gratuito
          </Button>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-[#E3D3B4]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          Sem compromisso. Você recebe uma visão clara dos próximos passos.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
