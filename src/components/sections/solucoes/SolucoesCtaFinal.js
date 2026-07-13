"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function SolucoesCtaFinal() {
  return (
    <AnimatedSection className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedTitle className="text-3xl font-bold text-[#E7664C] sm:text-4xl">
          Entenda qual estrutura faz sentido para o momento do seu negócio.
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-4 max-w-xl text-[#E3D3B4]">
          Em uma conversa inicial, analisamos o que você já possui, quais
          pontos precisam de atenção e por onde vale começar.
        </AnimatedSubtitle>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Button href="/diagnostico" variant="primary">
            Quero estruturar meu marketing
          </Button>
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-[#E3D3B4]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          Diagnóstico inicial, sem compromisso.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
